	// skills section
	var skills = '<div class="col-md-3"><img src="./img/%data%.png" alt="My skills" class="img-responsive img-circle"></div>';
	var skills_array = ['1','2','3','4','5','6','7','8','9','10','11','12'];
	var skills_new = '';
	for(var i = 0; i < skills_array.length; i += 1){
		skills_new = skills.replace('%data%', skills_array[i]);
	    $('.skills-section-images').append(skills_new);
	}

	// experience section

	var experience = '<li><h4>%data0% &nbsp; &nbsp; &nbsp; ( %data1% )</h4><br><h5>%data2%</h5></li><hr>';

	var experience_array = [
	{
		name:'SMU Hackathon 2015' , 
		period: 'May 2015',
		info: 'Winner - University Category <br><br> Project Name: HealthShirt <br><br> Project Info: Created an app focusing the Healthcare Industry showcasing the concept of Internet of things(IoT), by using Netduino Hardware to connect cloud server for transmitting data from the shirt to a full stack webpage.'
	},
	{
		name: 'SMU Hackathon 2014',
		period: 'May 2014',
		info: '<b>Social Media Coordinator</b> <br><br> \u2022 Managed the Social Media accounts for the event and helped in promoting the event successfully by capturing event photos and creating a buzz.'
	},
	{
		name: 'AIESEC Halifax, NS' ,
		period: 'September 2011 - January 2012 ' ,
		info: '<b>Social Media Head/ Webmaster</b> <br><br> \u2022 Managed and Created Web Content for the On-Campus Society at Saint Mary\'s University using technologies like WordPress, HTML, CSS and JavaScript.<br>\u2022 Also Assisted with managing the Social Media accounts for the Society.'
	},
	{
		name: 'Hero BPO, India' ,
		period: 'May 2011 - August 2011 ' ,
		info: '<b>IT Support</b> <br><br> \u2022 Successfully assisted the IT Support team by working in a help desk environment. <br> \u2022 Troubleshooted Windows Systems and Network problems. <br> \u02022 Installed new Hardware and Software to department Workstations.'
	},
	{
		name: 'Ansal Institute of Technology, India' ,
		period: 'January 2011 - May 2011 ' ,
		info: '<b>IT Lab Assistant</b> <br><br> \u2022 Installed and Upgraded Software on the machines in the lab. <br> \u2022 Successfully assisted the Staff and Students in resolving Technical issues. <br> \u2022 Successfully assisted in setting up new Hardware.'
	},
	{
		name: 'Paladin Security Ltd.' ,
		period: 'Aug 2014 - Present ' ,
		info: 'Job Role: High Profile Security Officer'
	},
	];

	var experience_new = '';

	for(var i=0; i<experience_array.length; i+=1){
		experience_new= experience.replace('%data0%',experience_array[i]['name']);
		//experience new= experience.replace('%data1%',experience_array[i]['profile/position']);
		experience_new= experience_new.replace('%data1%',experience_array[i]['period']);
		experience_new= experience_new.replace('%data2%',experience_array[i]['info']);
		$('.experience-section-info').append(experience_new);
	}