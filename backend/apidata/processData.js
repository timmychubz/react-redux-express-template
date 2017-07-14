var chem101 = require('./origin');
fs = require('fs');

var demo = chem101.result_data; //for practive

function dealwithOneCourse(demo) {
  var classObj = {LEC: [], REC: [], courseName:'', courseDescription:''};

  // course_description for the whole array?
  function dealWithOneSection ({activity, course_title, instructors, section_id, prerequisite_notes,
    meetings, lectures}) {
      if (activity === 'LEC') {
        var lecSection = {
                       courseName: course_title,
                       instructor: instructors[0].name,
                       id: section_id,   // in the format 'CHEM101001' CHEM, 101, 001(section Num)
                       info: {
                         department: section_id.slice(0,4),
                         courseNumber: section_id.slice(4, 7),
                         sectionNumber: section_id.slice(7)
                       },
                       // id.slice(0,4)= CHEM, id.slice(4, 7)=101, id.slice(7)=001 should work
                       preReq: prerequisite_notes,
                       time: {
                         start: meetings[0].start_time_24,  // in the format number, 12.3 means 12:30PM, in 24 hour
                         end: meetings[0].end_hour_24,
                         day: meetings[0].meeting_days // 'MWF'/'W'
                       }
        }
        classObj.LEC.push(lecSection);
      } else if(activity === 'REC') {
        var RecSection = {
          courseName: course_title,
          id: section_id,   // in the format 'CHEM101001' CHEM, 101, 001(section Num)
          info: {
            department: section_id.slice(0,4),
            courseNumber: section_id.slice(4, 7),
            sectionNumber: section_id.slice(7)
          },
          time: {
            start: meetings[0].start_time_24,  // in the format number, 12.3 means 12:30PM, in 24 hour
            end: meetings[0].end_hour_24,
            day: meetings[0].meeting_days // 'MWF'/'W'
          }
        }
        classObj.REC.push(RecSection);
      }
  }

  demo.forEach(function(item){
    dealWithOneSection(item);
  })

  classObj.courseDescription = demo[0].course_description;
  classObj.courseName = demo[0].course_title;

  console.log(classObj);
  fs.writeFile('math104.json', JSON.stringify(classObj));
}

dealwithOneCourse(demo);
