import { ErBsClient } from '../api';
// @ts-ignore
import fetch from 'node-fetch';
import { MetaTypes } from '../../constants/MetaTypes';
import { ROUTES } from '../../constants/Routes';

const FORCE_FETCH_FAILURE = 'forceFetchFail';

jest.mock('node-fetch', () => {
  return (route, options) => ({
    ok: !route.includes(FORCE_FETCH_FAILURE),
    json: () => ({
      data: {
        route,
        options
      }
    }),
    text: () => `${route}`
  });
});

describe('[Class] ErBsClient', () => {
  describe('[constructor]', () => {
    afterEach(() => {
      process.env.API_KEY = null;
      process.env.API_VER = 'v1';
    });

    describe('[Param 1] Api Key', () => {
      it('should assign the value to an apiKey property', () => {
        const client = new ErBsClient('test');

        expect(client['apiKey']).toEqual('test');
      });

      it('should pull from process.env.API_KEY by default', () => {
        process.env.API_KEY = 'myTest';

        const client = new ErBsClient();

        expect(client['apiKey']).toEqual('myTest');
      });
    });

    describe('[Param 2] Api Version', () => {
      it('should assign the value to an apiVersion property', () => {
        const client = new ErBsClient(null, 'test');

        expect(client['apiVersion']).toEqual('test');
      });

      it('should pull from process.env.API_VER by default', () => {
        process.env.API_VER = 'myTest';

        const client = new ErBsClient();

        expect(client['apiVersion']).toEqual('myTest');
      });

      it('should default to v1 if no value is present at all', () => {
        process.env.API_KEY = null;

        const client = new ErBsClient();

        expect(client['apiVersion']).toEqual('v1');
      });
    });
  });

  describe('[instance]', () => {
    let instance: ErBsClient;

    beforeEach(() => {
      instance = new ErBsClient('dummyKey');
      instance['baseURL'] = '';
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('[private]', () => {
      describe('call()', () => {
        it('should throw an error if apiKey is missing', () => {
          instance['apiKey'] = null;

          return expect(instance['call']('test')).rejects.toThrowError(
            'No Api Key Passed In'
          );
        });

        it('should call fetch() with the api key header injected', async () => {
          const results = await instance['call']('dummy');

          expect(results).toEqual({
            route: '/v1dummy',
            options: {
              headers: { 'x-api-key': 'dummyKey' }
            }
          });
        });

        it('should throw an error if response status is not ok', async () => {
          return expect(
            instance['call'](FORCE_FETCH_FAILURE)
          ).rejects.toThrowError();
        });

        it('should return the full response if a complete response is requested', async () => {
          const results = await instance['call']('TEST', true);

          expect(results).toEqual({
            data: {
              route: '/v1TEST',
              options: {
                headers: { 'x-api-key': 'dummyKey' }
              }
            }
          });
        });
      });
    });

    describe('[public]', () => {
      const generateMockCall = (key = 'data') =>
        jest.fn((route, complete) =>
          Promise.resolve({
            [key]: route,
            complete
          })
        );

      beforeEach(() => {
        instance['call'] = generateMockCall();
      });

      afterEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
        instance.flushCache();
      });

      describe('getCharacters()', () => {
        it('should call getCharacterData(), getCharacterAttributes(), and getCharacterLevelUpStats() once each', async () => {
          instance.getCharacterData = jest.fn(() => Promise.resolve([]));
          instance.getCharacterAttributes = jest.fn();
          instance.getCharacterLevelUpStats = jest.fn();

          await instance.getCharacters();

          expect(instance.getCharacterData).toHaveBeenCalledTimes(1);
          expect(instance.getCharacterAttributes).toHaveBeenCalledTimes(1);
          expect(instance.getCharacterLevelUpStats).toHaveBeenCalledTimes(1);
        });
      });

      describe('getMetaData()', () => {
        it('should make a call to fetch data with the provided meta type', async () => {
          instance['call'] = jest.fn();
          const spiedGenerateMethod = jest.spyOn(
            instance,
            'generateDataRoute' as any
          );

          await instance.getMetaData(MetaTypes.AreaSound);

          expect(spiedGenerateMethod).toHaveBeenCalledWith(MetaTypes.AreaSound);
          expect(instance['call']).toHaveBeenCalledWith(
            ROUTES.data.default.replace('{metaType}', MetaTypes.AreaSound)
          );
        });
      });

      const metaRoutes = [
        ['getCharacterData', MetaTypes.Character],
        ['getCharacterAttributes', MetaTypes.CharacterAttributes],
        ['getCharacterLevelUpStats', MetaTypes.CharacterLevelUpStat],
        ['getItemSpawns', MetaTypes.ItemSpawn],
        ['getArmors', MetaTypes.ItemArmor],
        ['getWeapons', MetaTypes.ItemWeapon],
        ['getConsumables', MetaTypes.ItemConsumable],
        ['getMaterials', MetaTypes.ItemMisc],
        ['getSpecialItems', MetaTypes.ItemSpecial],
        ['getItemLocations', MetaTypes.HowToFindItem]
      ];

      for (const [endpoint, type] of metaRoutes) {
        describe(`${endpoint}()`, () => {
          it(`should call getMetaData with ${type}`, (done) => {
            const mockedCall = (instance['getMetaData'] = jest.fn());

            return instance[endpoint]().then(() => {
              expect(mockedCall).toHaveBeenCalledWith(type);

              return done();
            });
          });
        });
      }
    });
  });
});
