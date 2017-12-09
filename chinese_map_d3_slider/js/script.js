	var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Beijing','Tianjin', 'Shijiazhuang'];

//Data
var social = [
		  [
			{axis:"Area of Green Land",value:0.4879338415},
			{axis:"Green Covered Area %",value:0.6552526166},
			{axis:"Administrative region Area - under city",value:0.4116036109},
			{axis:"Population Density - Total City",value:0.3050733187},
			{axis:"GDP",value:0.9147822418},
			{axis:"Housing Price",value:0.6104310256},
			{axis:"Population", value:0.3893473866},
			{axis:"Number of Taxis", value:1.0}
		  ],[
			{axis:"Area of Green Land",value:0.1764580575},
			{axis:"Green Covered Area %",value:0.4523840289},
			{axis:"Administrative region Area - under city",value:0.249721067},
			{axis:"Population_Density - Total_City",value:0.32053384},
			{axis:"GDP",value:0.6530748317},
			{axis:"Housing Price",value:0.186297706},
			{axis:"Population", value:0.293439516},
			{axis:"Number of Taxis", value:0.4754113059}
		  ],[
		  	{axis:"Area of Green Land",value:0.070327597},
			{axis:"Green Covered Area %",value:0.549166559},
			{axis:"Administrative region Area - under city",value:0.0099063461},
			{axis:"Population_Density - Total_City",value:0.2402854604},
			{axis:"GDP",value:0.2046279264},
			{axis:"Housing Price",value:0.1131570826},
			{axis:"Population", value:0.2940240628},
			{axis:"Number of Taxis", value:0.0983996055}
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", social, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Cities");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;