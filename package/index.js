import tty from"tty";const isDisabled="NO_COLOR"in process.env||process.argv.includes("--no-color"),isForced="FORCE_COLOR"in process.env||process.argv.includes("--color"),isWindows="win32"===process.platform,isCompatibleTerminal=tty&&tty.isatty(1)&&process.env.TERM&&"dumb"!==process.env.TERM,isCI="CI"in process.env&&("GITHUB_ACTIONS"in process.env||"GITLAB_CI"in process.env||"CIRCLECI"in process.env);export const isColorSupported=!isDisabled&&(isForced||isWindows||isCompatibleTerminal||isCI);const nope=e=>""+e;function color(e,o,r,l=e){return function(n){return n&&n.length?e+(~n.indexOf(o,4)?n.replace(r,l):n)+o:""===n?"":e+n+o}}const close22="[22m",close39="[39m",close49="[49m",regexp22=/\x1b\[22m/g,regexp39=/\x1b\[39m/g,regexp49=/\x1b\[49m/g;export function createColors(e=isColorSupported){return e?{isColorSupported:!0,reset:e=>`[0m${e}[0m`,bold:color("[1m",close22,regexp22,"[22m[1m"),dim:color("[2m",close22,regexp22,"[22m[2m"),italic:color("[3m","[23m",/\x1b\[23m/g),underline:color("[4m","[24m",/\x1b\[24m/g),inverse:color("[7m","[27m",/\x1b\[27m/g),hidden:color("[8m","[28m",/\x1b\[28m/g),strikethrough:color("[9m","[29m",/\x1b\[29m/g),black:color("[30m",close39,regexp39),red:color("[31m",close39,regexp39),green:color("[32m",close39,regexp39),yellow:color("[33m",close39,regexp39),blue:color("[34m",close39,regexp39),magenta:color("[35m",close39,regexp39),cyan:color("[36m",close39,regexp39),white:color("[37m",close39,regexp39),gray:color("[90m",close39,regexp39),bgBlack:color("[40m",close49,regexp49),bgRed:color("[41m",close49,regexp49),bgGreen:color("[42m",close49,regexp49),bgYellow:color("[43m",close49,regexp49),bgBlue:color("[44m",close49,regexp49),bgMagenta:color("[45m",close49,regexp49),bgCyan:color("[46m",close49,regexp49),bgWhite:color("[47m",close49,regexp49)}:{isColorSupported:!1,reset:nope,bold:nope,dim:nope,italic:nope,underline:nope,inverse:nope,hidden:nope,strikethrough:nope,black:nope,red:nope,green:nope,yellow:nope,blue:nope,magenta:nope,cyan:nope,white:nope,gray:nope,bgBlack:nope,bgRed:nope,bgGreen:nope,bgYellow:nope,bgBlue:nope,bgMagenta:nope,bgCyan:nope,bgWhite:nope}}export const{reset:reset,bold:bold,dim:dim,italic:italic,underline:underline,inverse:inverse,hidden:hidden,strikethrough:strikethrough,black:black,red:red,green:green,yellow:yellow,blue:blue,magenta:magenta,cyan:cyan,white:white,gray:gray,bgBlack:bgBlack,bgRed:bgRed,bgGreen:bgGreen,bgYellow:bgYellow,bgBlue:bgBlue,bgMagenta:bgMagenta,bgCyan:bgCyan,bgWhite:bgWhite}=createColors(isColorSupported);
