"use strict";
/**
 * @packageDocumentation
 * @module ErBsClient
 **/
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasteryCodes = void 0;
var MasteryCodes;
(function (MasteryCodes) {
    MasteryCodes[MasteryCodes["None"] = 0] = "None";
    MasteryCodes[MasteryCodes["Glove"] = 1] = "Glove";
    MasteryCodes[MasteryCodes["Tonfa"] = 2] = "Tonfa";
    MasteryCodes[MasteryCodes["Bat"] = 3] = "Bat";
    MasteryCodes[MasteryCodes["Whip"] = 4] = "Whip";
    MasteryCodes[MasteryCodes["HighAngleFire"] = 5] = "HighAngleFire";
    MasteryCodes[MasteryCodes["DirectFire"] = 6] = "DirectFire";
    MasteryCodes[MasteryCodes["Bow"] = 7] = "Bow";
    MasteryCodes[MasteryCodes["CrossBow"] = 8] = "CrossBow";
    MasteryCodes[MasteryCodes["Pistol"] = 9] = "Pistol";
    MasteryCodes[MasteryCodes["AssaultRifle"] = 10] = "AssaultRifle";
    MasteryCodes[MasteryCodes["SniperRifle"] = 11] = "SniperRifle";
    MasteryCodes[MasteryCodes["Cannon"] = 12] = "Cannon";
    MasteryCodes[MasteryCodes["Hammer"] = 13] = "Hammer";
    MasteryCodes[MasteryCodes["Axe"] = 14] = "Axe";
    MasteryCodes[MasteryCodes["OneHandSword"] = 15] = "OneHandSword";
    MasteryCodes[MasteryCodes["TwoHandSword"] = 16] = "TwoHandSword";
    MasteryCodes[MasteryCodes["Polearm"] = 17] = "Polearm";
    MasteryCodes[MasteryCodes["DualSword"] = 18] = "DualSword";
    MasteryCodes[MasteryCodes["Spear"] = 19] = "Spear";
    MasteryCodes[MasteryCodes["Nunchaku"] = 20] = "Nunchaku";
    MasteryCodes[MasteryCodes["Rapier"] = 21] = "Rapier";
    MasteryCodes[MasteryCodes["Guitar"] = 22] = "Guitar";
    MasteryCodes[MasteryCodes["Trap"] = 101] = "Trap";
    MasteryCodes[MasteryCodes["Craft"] = 102] = "Craft";
    MasteryCodes[MasteryCodes["Search"] = 103] = "Search";
    MasteryCodes[MasteryCodes["Move"] = 104] = "Move";
    MasteryCodes[MasteryCodes["Health"] = 201] = "Health";
    MasteryCodes[MasteryCodes["Defense"] = 202] = "Defense";
    MasteryCodes[MasteryCodes["Meditation"] = 203] = "Meditation";
    MasteryCodes[MasteryCodes["Hunt"] = 204] = "Hunt";
})(MasteryCodes = exports.MasteryCodes || (exports.MasteryCodes = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFzdGVyaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnN0YW50cy9NYXN0ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7SUFHSTs7O0FBRUosSUFBWSxZQWdDWDtBQWhDRCxXQUFZLFlBQVk7SUFDdkIsK0NBQVUsQ0FBQTtJQUNWLGlEQUFXLENBQUE7SUFDWCxpREFBVyxDQUFBO0lBQ1gsNkNBQVMsQ0FBQTtJQUNULCtDQUFVLENBQUE7SUFDVixpRUFBbUIsQ0FBQTtJQUNuQiwyREFBZ0IsQ0FBQTtJQUNoQiw2Q0FBUyxDQUFBO0lBQ1QsdURBQWMsQ0FBQTtJQUNkLG1EQUFZLENBQUE7SUFDWixnRUFBbUIsQ0FBQTtJQUNuQiw4REFBa0IsQ0FBQTtJQUNsQixvREFBYSxDQUFBO0lBQ2Isb0RBQWEsQ0FBQTtJQUNiLDhDQUFVLENBQUE7SUFDVixnRUFBbUIsQ0FBQTtJQUNuQixnRUFBbUIsQ0FBQTtJQUNuQixzREFBYyxDQUFBO0lBQ2QsMERBQWdCLENBQUE7SUFDaEIsa0RBQVksQ0FBQTtJQUNaLHdEQUFlLENBQUE7SUFDZixvREFBYSxDQUFBO0lBQ2Isb0RBQWEsQ0FBQTtJQUNiLGlEQUFZLENBQUE7SUFDWixtREFBYSxDQUFBO0lBQ2IscURBQWMsQ0FBQTtJQUNkLGlEQUFZLENBQUE7SUFDWixxREFBYyxDQUFBO0lBQ2QsdURBQWUsQ0FBQTtJQUNmLDZEQUFrQixDQUFBO0lBQ2xCLGlEQUFZLENBQUE7QUFDYixDQUFDLEVBaENXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBZ0N2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBcclxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXHJcbiAqIEBtb2R1bGUgRXJCc0NsaWVudFxyXG4gKiovXHJcblxyXG5leHBvcnQgZW51bSBNYXN0ZXJ5Q29kZXMge1xyXG5cdCdOb25lJyA9IDAsXHJcblx0J0dsb3ZlJyA9IDEsXHJcblx0J1RvbmZhJyA9IDIsXHJcblx0J0JhdCcgPSAzLFxyXG5cdCdXaGlwJyA9IDQsXHJcblx0J0hpZ2hBbmdsZUZpcmUnID0gNSxcclxuXHQnRGlyZWN0RmlyZScgPSA2LFxyXG5cdCdCb3cnID0gNyxcclxuXHQnQ3Jvc3NCb3cnID0gOCxcclxuXHQnUGlzdG9sJyA9IDksXHJcblx0J0Fzc2F1bHRSaWZsZScgPSAxMCxcclxuXHQnU25pcGVyUmlmbGUnID0gMTEsXHJcblx0J0Nhbm5vbicgPSAxMixcclxuXHQnSGFtbWVyJyA9IDEzLFxyXG5cdCdBeGUnID0gMTQsXHJcblx0J09uZUhhbmRTd29yZCcgPSAxNSxcclxuXHQnVHdvSGFuZFN3b3JkJyA9IDE2LFxyXG5cdCdQb2xlYXJtJyA9IDE3LFxyXG5cdCdEdWFsU3dvcmQnID0gMTgsXHJcblx0J1NwZWFyJyA9IDE5LFxyXG5cdCdOdW5jaGFrdScgPSAyMCxcclxuXHQnUmFwaWVyJyA9IDIxLFxyXG5cdCdHdWl0YXInID0gMjIsXHJcblx0J1RyYXAnID0gMTAxLFxyXG5cdCdDcmFmdCcgPSAxMDIsXHJcblx0J1NlYXJjaCcgPSAxMDMsXHJcblx0J01vdmUnID0gMTA0LFxyXG5cdCdIZWFsdGgnID0gMjAxLFxyXG5cdCdEZWZlbnNlJyA9IDIwMixcclxuXHQnTWVkaXRhdGlvbicgPSAyMDMsXHJcblx0J0h1bnQnID0gMjA0XHJcbn1cclxuIl19