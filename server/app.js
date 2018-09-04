var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();
var cors = require('cors');
// var makeWord = require('./makeWord.js')
var async = require ( 'async' );
var officegen = require('officegen');
var fs = require('fs');

let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'../client/' ,'build')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.get('/',(req,res)=>{
    res.send(path.join(__dirname,'../client/build', 'index.html'))
})

app.get('/download',(req,res)=>{
    var options = {
        root: __dirname + '/tmp/',
    }
    res.sendFile('demo.docx', options, function (err) {
        if (err) {
            console.log(err)
        } else {
          console.log('sent');
        }
      });
})
app.post('/',(req,res)=>{
    var docx = officegen ( {
        type: 'docx',
        orientation: 'portrait',
        pageMargins: { top: 1000, left: 1000, bottom: 1000, right: 1000 },
    });

    var details = req.body;
    
    var headerStyles = {
        bold:true,
        underline:true, 
        font_size:'12',
        font_face:'Times New Roman'
    };
    var spaceConfig = {
        singleTabSpace:`	`,
        doubleTabSpace:`		`
    };
    
    docx.on ( 'error', function ( err ) {
        console.log ( err );
    });
    
    var pObj = docx.createP ();
    pObj.options.align="right";
    pObj.addText ( details.name,{font_face:'Times New Roman',font_size:'11',align:'right',bold: true} );
    
    function giveModifiedAddress(address){
        let modifiedAddress = [];
        let len = address.length;
        let noOfCharsInLine = 20;
        let temp1=address[0],temp2=address[0];
           for(let i=1;i<=len;i++){
         temp1 = temp1+ " "+address[i] || "";
        if(temp1.trim().length > noOfCharsInLine){
            modifiedAddress.push(temp2.trim());
            temp1 = address[i];
            temp2 = temp1;
        }
        else {
         temp2 = temp1.trim(); 
        } 
        }
        if(modifiedAddress.length ==0){
        modifiedAddress.push(temp2)}
        return modifiedAddress;
    };
    
    var pObj = docx.createP ();
    pObj.options.align="right";
    let address = giveModifiedAddress(details.address.split(' '));
    for(let i =0;i<address.length;i++){
        pObj.addText (address[i]);
        pObj.addLineBreak ();
    }
    pObj.addText(details.email);
    pObj.addLineBreak ();
    pObj.addText(details.phoneNo);
    
    var pObj = docx.createP ();
    pObj.addHorizontalLine ();
    
    var pObj = docx.createP ();
    pObj.addText ( 'CARRER OBJECTIVE:' , headerStyles);
    
    var pObj = docx.createP ();
    pObj.addLineBreak ();
    pObj.addText(details.careerObjective);
    pObj.addLineBreak ();
    
    var pObj = docx.createP ();
    pObj.addText ( 'EDUCATIONAL QUALIFICATION:' , headerStyles);
    
    var pObj = docx.createP ();
    var table = [
        [
        {
            val: "Examination",
            opts: {
                b:true,
                sz: '24',
                fontFamily: "Times New Roman",
                align: "center",
            }
        },
        {
            val: "Board/ University",
            opts: {
                b:true,
                sz: '24',
                fontFamily: "Times New Roman",
                align: "center",
            }
        },
        {
            val: "Institution",
            opts: {
                b:true,
                sz: '24',
                fontFamily: "Times New Roman",
                align: "center",
            }
        },
        {
            val: "Institution",
            opts: {
                b:true,
                sz: '24',
                fontFamily: "Times New Roman",
                align: "center",
            }	
        }],
        [details.degreeExamination,details.degreeBoard,details.degreeInstitution,details.degreePercentage],
        [details.interMediateExamination,details.interMediateBoard,details.interMediateInstitution,details.interMediatePercentage],
        [details.schoolExamination,details.schoolBoard,details.schoolInstitution,details.schoolPercentage],
        
    ]
    
    var tableStyle = {
        tableColWidth: 4200,
        tableSize: 22,
        tableColor: "black",
        tableAlign: "center",
        borders: true,
        rtl: true,
        tableFontFamily: "Times New Roman"
    }
    var pObj = docx.createTable (table, tableStyle);
    var pObj = docx.createP ();
    pObj.addLineBreak ();
    
    
    var pObj = docx.createP ();
    pObj.addText ( 'TECHNICAL SKILLS:' , headerStyles);
    pObj.addLineBreak();
    
    var tableConfig = {
        header:{
            b: true,
            sz: '22',
            align: "left",
            fontFamily: "Times New Roman",
            cellColWidth: 5000
        },
        colon:{
            b:true,
            sz: '24',
            cellColWidth: 61,
            align: "center",
            fontFamily: "Times New Roman",
        },
        values:{
            align: "left",
            sz: '22',
            cellColWidth: 7000,
            fontFamily: "Times New Roman"
        }
    }
    
    var table = [
        [
            {
                val:"Programming Languages",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.technicalSkills,
                opts: tableConfig.values
            }
        ],
        [
            {
                val:"Tools Used",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.toolsUsed,
                opts: tableConfig.values
            }
        ],
        [
            {
                val:"Operating Systems worked on",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.systemsUsed,
                opts: tableConfig.values
            }
        ]
    ]
    var tableStyle = {
        tableSize: 22,
        tableColor: "black",
        tableAlign: "center",
        tableFontFamily: "Times New Roman",
    }
    
    var pObj = docx.createTable (table, tableStyle);
    var pObj = docx.createP ();
    pObj.addLineBreak ();
    
    var pObj = docx.createP ();
    pObj.addText ( 'PROJECT UNDERTAKEN:' , headerStyles);
    pObj.addLineBreak();
    
    
    var table = [
        [
            {
                val:"Project Name",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.projectName,
                opts: tableConfig.values
            }
        ],
        [
            {
                val:"Description",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.projectDescription,
                opts: tableConfig.values
            }
        ],
        [
            {
                val:"Roles and Responsibilities",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.projectRoles,
                opts: tableConfig.values
            }
        ]
    ]
    var tableStyle = {
        tableSize: 22,
        tableColor: "black",
        tableAlign: "center",
        tableFontFamily: "Times New Roman",
    }
    var pObj = docx.createTable (table, tableStyle);
    
    
    var pObj = docx.createP ();
    pObj.addLineBreak ();
    
    
    var pObj = docx.createP ();
    pObj.addText ( 'ACHIEVEMENTS:' , headerStyles);
    pObj.addLineBreak ();
    let index =0, len = details.achievements.length;
    while(index<len){
        var pObj = docx.createListOfDots();
        pObj.addText ( details.achievements[index]);
        index++;
    }
    pObj.addLineBreak ();
    
    var pObj = docx.createP ();
    pObj.addText ( 'HOBBIES:' , headerStyles);
    pObj.addLineBreak ();
     index =0;
    len = details.hobbies.length;
    while(index<len){
        var pObj = docx.createListOfDots();
        pObj.addText ( details.hobbies[index]);
        index++;
    }
    pObj.addLineBreak ();
    
    var pObj = docx.createP ();
    pObj.addLineBreak ();
    
    pObj.addText ( 'PERSONAL DETAILS:' , headerStyles);
    pObj.addLineBreak();
    var table = [
        [
            {
                val:"Name",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.myName,
                opts: tableConfig.values
            }
        ],
        [
            {
                val:"DOB",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.dob,
                opts: tableConfig.values
            }
        ],
        [
            {
                val:"Father’sName",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.fatherName,
                opts: tableConfig.values
            }
        ],
        [
            {
                val:"Languages Known",
                opts: tableConfig.header
            },
            {
                val:":",
                opts:tableConfig.colon
            },
            {
                val:details.knownLanguages,
                opts: tableConfig.values
            }
        ]
        
    ]
    var tableStyle = {
        tableColWidth: 4200,
        tableSize: 22,
        tableColor: "black",
        tableAlign: "center",
        tableFontFamily: "Times New Roman"
    }
    var pObj = docx.createTable (table, tableStyle);
    
    var pObj = docx.createP ();
    pObj.addText ( 'DECLARATION:' , headerStyles);
    
    var pObj = docx.createP ();
    pObj.addLineBreak ();
    pObj.addText(details.declaration);
    pObj.addLineBreak ();
    
    var pObj = docx.createP ();
    pObj.addText("PLACE:",{bold:true,font_face:"Times New Roman",font_size:"12"});
    pObj.addLineBreak();
    pObj.addText("DATE:",{bold:true,font_face:"Times New Roman",font_size:"12"});
    
    
    var pObj = docx.createP ();
    pObj.options.align = 'right';
    pObj.addLineBreak();
    pObj.addText(details.myName.toUpperCase(),{bold:true,font_face:"Times New Roman",font_size:"12"})
    
    var out = fs.createWriteStream ( 'server/tmp/demo.docx' );
    
    out.on ( 'error', function ( err ) {
        res.status(500).send('Something broke!')
        console.log ( err );
    });
    
    async.parallel ([
        function ( done ) {
            out.on ( 'close', function () {
                console.log ( 'Finish to create a DOCX file.' );
                done ( null );
                res.send("i got the messgae darling")
            });
            docx.generate ( out );
        }
    
    ], function ( err ) {
        if ( err ) {
            console.log ( 'error: ' + err );
            res.status(500).send('Something broke!')
        } // Endif.
    });
})


app.listen(port,()=>{
    console.log("server is up at the port 3000")
})