/*
 "0": void
 "1": ground
 "2": item
 "y": ground-corner-right
 "p": ground-corner-left
 "?": platform-ground-right
 "'": platform-ground-left
 "-": platform-ground
 "=": platform-ground-between
 "m": bush-small
 "w": bush-small-creature
 "T": ground-pilar-top
 "i": ground-pilar-body
 "v": ground-pilar-node
*/
const defaultMap = {
    name:"default",
    walls:[
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" ","T"," ","-"," "," ","P"," "," "," "," "," "," "," ",],
        [" ","i"," "," "," ","'","=","=","?"," "," "," "," "," ",],
        [" ","i"," "," ","-"," "," "," "," ","-"," "," "," "," ",],
        [" ","i"," ","T"," "," "," "," "," "," ","T"," "," "," ",],
        ["1","v","1","v","1","p"," "," ","y","1","v","1","1","1",],
    ],
    middleground:[
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," ","m"," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," ","w"," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
    ],
}
const map2 = {
    name:"final",
    walls:[
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," ","T"," ",],
        [" "," "," "," "," "," ","-"," "," "," "," "," ","i"," ",],
        ["1","1","1","1","p"," "," "," ","y","p"," ","y","v","1",],
    ],
    middleground:[
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
        [" "," ","m"," "," "," "," "," "," ","w"," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," "," "," "," "," ",],
    ],
}