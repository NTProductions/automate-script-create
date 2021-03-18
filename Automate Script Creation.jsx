// Automate Script Creation
var scriptFile = File("~/Desktop/script.jsx");

var howManyComps = 5;

var writeString = "";

scriptFile.open("w");
for(var i = 1; i <= howManyComps; i++) {
    writeString += 'var comp = app.project.items.addComp("My comp", 1920, 1080, 1, 10, 30);\r';
    writeString += 'var layer = comp.layers.addSolid([1, 1, 1], "Solid Layer", comp.width, comp.height, 1);\r';
    writeString += 'comp.openInViewer();\r\r';
    }
scriptFile.write(writeString);
scriptFile.close();

// for this to execute properly in AE, set your default program to run scripts as After Effects
$.evalFile(scriptFile);