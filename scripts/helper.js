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
	name: 'Paladin Security Ltd.' ,
	period: 'Aug 2014 - Present ' ,
	info: 'Job Role: High Profile Security Officer'
},
{
	name:'SMU Hackathon 2015' , 
	period: 'May 2015',
	info: 'Winner - University Category <br><br> Project Name: HealthShirt <br><br> Project Info: Created an app focusing the Healthcare Industry showcasing the concept of Internet of things(IoT), by using Netduino Hardware to connect cloud server for transmitting data from the shirt to a full stack webpage.'
},
{
	name: 'Company Name 3',
	//profile/position: 'XYZ',
	period: 'month 20xx- month 20xx',
	info: 'Job description.....explain roles and duties etc......'
}
];

var experience_new = '';

for(var i=0; i<experience_array.length; i+=1){
	experience_new= experience.replace('%data0%',experience_array[i]['name']);
	//experience new= experience.replace('%data1%',experience_array[i]['profile/position']);
	experience_new= experience_new.replace('%data1%',experience_array[i]['period']);
	experience_new= experience_new.replace('%data2%',experience_array[i]['info']);
	$('.experience-section-info').append(experience_new);
}