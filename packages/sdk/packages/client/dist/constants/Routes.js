"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = void 0;
/**
 * @packageDocumentation
 * @module ErBsClient
 * @ignore
 **/
exports.ROUTES = {
    data: {
        default: '/data/{metaType}'
    },
    rank: {
        top: '/rank/top/{seasonId}/{matchingTeamMode}',
        user: '/rank/{userNum}/{seasonId}/{matchingTeamMode}'
    },
    user: {
        games: '/user/games/{userNum}',
        stats: '/user/stats/{userNum}/{seasonId}'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9Sb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7SUFJSTtBQUNTLFFBQUEsTUFBTSxHQUFHO0lBQ3JCLElBQUksRUFBRTtRQUNMLE9BQU8sRUFBRSxrQkFBa0I7S0FDM0I7SUFDRCxJQUFJLEVBQUU7UUFDTCxHQUFHLEVBQUUseUNBQXlDO1FBQzlDLElBQUksRUFBRSwrQ0FBK0M7S0FDckQ7SUFDRCxJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsdUJBQXVCO1FBQzlCLEtBQUssRUFBRSxrQ0FBa0M7S0FDekM7Q0FDRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFxyXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cclxuICogQG1vZHVsZSBFckJzQ2xpZW50XHJcbiAqIEBpZ25vcmVcclxuICoqL1xyXG5leHBvcnQgY29uc3QgUk9VVEVTID0ge1xyXG5cdGRhdGE6IHtcclxuXHRcdGRlZmF1bHQ6ICcvZGF0YS97bWV0YVR5cGV9J1xyXG5cdH0sXHJcblx0cmFuazoge1xyXG5cdFx0dG9wOiAnL3JhbmsvdG9wL3tzZWFzb25JZH0ve21hdGNoaW5nVGVhbU1vZGV9JyxcclxuXHRcdHVzZXI6ICcvcmFuay97dXNlck51bX0ve3NlYXNvbklkfS97bWF0Y2hpbmdUZWFtTW9kZX0nXHJcblx0fSxcclxuXHR1c2VyOiB7XHJcblx0XHRnYW1lczogJy91c2VyL2dhbWVzL3t1c2VyTnVtfScsXHJcblx0XHRzdGF0czogJy91c2VyL3N0YXRzL3t1c2VyTnVtfS97c2Vhc29uSWR9J1xyXG5cdH1cclxufTtcclxuIl19