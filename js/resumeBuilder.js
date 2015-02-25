$(function(){
    var view = {
        init: function() {
            $("#topContacts").before(
                $(HTMLheaderName.replace("%data%", model.bio.name))
            )
            $("#name").after(HTMLheaderRole.replace("%data%"," "+model.bio.role));
            $.each( model.bio.contacts, function( key, value ) {
                $("#topContacts").append(HTMLcontactGeneric.replace("%contact%",key).replace("%data%",value));
            });
            $("#topContacts").after(HTMLskillsStart)
                .after(HTMLWelcomeMsg.replace("%data%",model.bio.welcomeMessage))
                .after(HTMLbioPic.replace("%data%",model.bio.biopic));
            $.each( model.bio.skills, function( key, value ) {
                $("#skills").append(HTMLskills.replace("%data%",value));
            });

            $("#workExperience").append(HTMLworkStart);
            $.each( model.work.jobs, function( key, value ) {
                $(".work-entry").append(HTMLworkEmployer.replace("%data%",value.employer)+HTMLworkTitle.replace("%data%",value.title))
                    .append(HTMLworkDates.replace("%data%",value.dates))
                    .append(HTMLworkLocation.replace("%data%",value.location))
                    .append(HTMLworkDescription.replace("%data%",value.description));
            });

            $.each( model.projects.projects, function( key, prj ) {
                $("#projects").append(
                    $(HTMLprojectStart).append(HTMLprojectTitle.replace("%data%",prj.title))
                        .append(HTMLprojectDates.replace("%data%",prj.dates))
                        .append(HTMLprojectDescription.replace("%data%",prj.description))
                        .append(HTMLprojectImage.replace("%data%",prj.images)));
            });
            
            $.each( model.education.schools, function( key, school) {
                $("#education").append(
                    $(HTMLschoolStart).append(HTMLschoolName.replace("%data%", school.name)+HTMLschoolDegree.replace("%data%", school.degree))
                        .append(HTMLschoolDates.replace("%data%", school.dates))
                        .append(HTMLschoolLocation.replace("%data%", school.location))
                        .append(HTMLschoolMajor)
                );
            });
            $("#education").append(HTMLonlineClasses);
            $.each( model.education.onlineCourses, function( key, course ) {
                $("#education").append(
                    $(HTMLschoolStart).append(HTMLonlineTitle.replace("%data%",course.title)+HTMLonlineSchool.replace("%data%",course.school))
                    .append(HTMLonlineDates.replace("%data%",course.dates))
                    .append(HTMLonlineURL.replace("%data%",course.url)));
            });

            $("#mapDiv").append(internationalizeButton);
            $("#mapDiv").append(googleMap);
        }
    };
    var octopus = {
        init: function() {
            //model.init();
            view.init(model.bio.name);
        }
    };

    octopus.init();
});