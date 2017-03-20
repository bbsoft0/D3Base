///////////////////////////////////////////////////////////////////////////
/////////////////////////////// SOM Data //////////////////////////////////
///////////////////////////////////////////////////////////////////////////

//The color of each hexagon
var color = ["#D9D9D9", "#DCDCDC", "#E6E6E6", "#F1F1F1", "#F8F8F8", "#FFFFFF", "#F9F4F4", "#FFF9F9", "#FFE4E1", "#FFF5EE", "#FFFAF0", "#FCFFF5", "#F0FFF0", "#F5FFFA", "#E8FFFF", "#F0F8FF", "#F7F7FF", "#E6E6FA", "#E9F7FA", "#E5EEF5", "#DCE1E2", "#DADAEB", "#EFECF4", "#F5F0F7", "#D8BFD8", "#EBD2D7", "#F7B6D2", "#FDD6EA", "#FFF1F6", "#FDD7DB", "#D3D3D3", "#DDDDDD", "#E9E9E9", "#F5F5F5", "#FBFBFB", "#FEFCFB", "#FDE1DE", "#FEDFD0", "#FEEDE1", "#FFF8E3", "#FFFFF0", "#FAFFEA", "#F2FEF3", "#BDFFD3", "#B7EEFF", "#C4C8FF", "#E0F0FD", "#DDEBF7", "#C8DCEF", "#BCD4E6", "#C5D0E4", "#CECEE2", "#C9BFDC", "#E3CFE6", "#D5B7D9", "#EFB6D7", "#FFADFF", "#FAA8B6", "#FFAFD4", "#FFBDC8", "#CCCCCC", "#D0D0D0", "#E1E1E1", "#EEEEEE", "#F1F0EE", "#EFD6D6", "#FAF0E6", "#FDF5F0", "#FDF5E6", "#FEF0DB", "#FFF8DC", "#FFFFE0", "#FBFCCE", "#F4FBEC", "#EAF7E6", "#C9EDDD", "#AFEEEE", "#BEE4F3", "#A9D5F2", "#AEC7E8", "#AEC3DD", "#BCBDDC", "#B9B4D7", "#C4AFD4", "#D2A2D9", "#E291DC", "#EE81EE", "#F782BE", "#FE67AF", "#FF8FCC", "#C7C7C7", "#C4C4C4", "#CFCECE", "#D5D2C9", "#FCFCFA", "#F9F5E9", "#F8EEDD", "#FAEBD7", "#FAF0CF", "#FFEDD1", "#FEF3CC", "#FFFBCD", "#FAFAD2", "#E6F5CD", "#D8EDCF", "#B9E0CE", "#CBEBE6", "#B0E0E6", "#ADD8E6", "#A6CFE2", "#A1B4C6", "#9A9AC8", "#B08CC5", "#C996C4", "#DD9FDB", "#E476E3", "#E789C1", "#FE339A", "#E82DCA", "#FF00FF", "#B6B6B6", "#BCBCBC", "#C0C0C0", "#C4C3C0", "#E0E1CF", "#EEEBE3", "#F5F5DC", "#F1E2CD", "#F6EAC1", "#FEE7CA", "#FFE4C4", "#FFF6BD", "#FFFFBF", "#F7FCB7", "#D0EAB7", "#C5E8BF", "#A3DCB5", "#92D6C9", "#ADDDDC", "#9EDAE5", "#9BC8E0", "#9E9FDE", "#9470DB", "#9E56DE", "#D970D6", "#D79CB7", "#E377C2", "#E42483", "#FF1493", "#EE00D4", "#AAAAAA", "#B3B3B3", "#BFB1AD", "#B6B09E", "#E5DAC2", "#CDDA9D", "#D9F0A3", "#EEE8AA", "#F5DEB3", "#FBC3BF", "#FFDAB9", "#FFE4B5", "#FFFFB3", "#EAF6A5", "#B1EDA3", "#9FEFA7", "#A4EECA", "#6BE4C2", "#77DAEB", "#87CEEB", "#88ADE7", "#9788E9", "#8A2BE2", "#B81CC0", "#BA55D3", "#DE6DAF", "#DB3B8F", "#C71685", "#F70282", "#FC0E4C", "#A1A1A1", "#AA9A98", "#BC8F8F", "#C59C95", "#E2BCB7", "#D8C7A8", "#DBDB8C", "#E1DDAD", "#F0E68C", "#F9DFAF", "#FDCDAC", "#FFDEAC", "#FFEEA7", "#FFFE98", "#DCFF9E", "#98FB98", "#61FF9E", "#80FFD4", "#62F1FB", "#88CDFB", "#9A92FF", "#7B68EE", "#B849FF", "#9400D4", "#9A32CC", "#CB6CB9", "#DE7B95", "#D23850", "#D31559", "#DC143D", "#989898", "#A2807C", "#D48F8E", "#D4957B", "#D2B48C", "#D6BB87", "#E7C893", "#EFB89E", "#FBB7A7", "#FDD1A1", "#FCCC8B", "#FEE08E", "#FFEC6A", "#CCFE63", "#6BFF6A", "#90EE90", "#70E883", "#63FFCE", "#67C9EF", "#60B0FE", "#6676FF", "#514CFA", "#3E30C7", "#8A3EB8", "#A460BE", "#B47C90", "#D5606D", "#D62728", "#DC191D", "#C90022", "#888888", "#868686", "#898281", "#BF7866", "#CAB375", "#DCAB94", "#DEB986", "#F3A682", "#FF9896", "#FCAD91", "#FDBD85", "#FFBB77", "#FEDA76", "#F1FE63", "#A0FF63", "#97E573", "#98DF8A", "#77DC98", "#3FE0D0", "#47B2D5", "#5CB7E4", "#6495ED", "#416AE1", "#6A5ACD", "#9467BD", "#BC81BC", "#A85293", "#AA484C", "#A91625", "#A5001F", "#7F7F7F", "#808080", "#9D9576", "#BCB76B", "#BF9B61", "#DAB167", "#E9967B", "#F7967B", "#FF8282", "#FF9F79", "#FDAE6B", "#FDB262", "#FED05F", "#D7EE8A", "#BDE48D", "#B1DD8C", "#A3D99C", "#66CAA9", "#48D1CC", "#41B7C3", "#6AADD5", "#6190D0", "#6B6ECE", "#807CBD", "#9C67A4", "#8D4FA0", "#7B4271", "#1E1618", "#54162F", "#6F001C", "#777777", "#7B7A7A", "#828179", "#8BA054", "#BD9F39", "#CD853F", "#EC8B5E", "#F08080", "#FA8072", "#FC8C5D", "#FF9865", "#F4A460", "#FEBB4A", "#EBD066", "#B2CD6C", "#AADA6A", "#BDCBBB", "#96B5AC", "#78CCC3", "#5BB5B1", "#67A7BA", "#7AAED1", "#6E87B9", "#766DB1", "#6D5299", "#7B6786", "#684768", "#772E8A", "#96275F", "#970146", "#727272", "#996666", "#756F5C", "#A88752", "#C3822B", "#D4743E", "#E16F63", "#F7815F", "#FF6C64", "#FF7F50", "#F89847", "#EFA542", "#E8BC51", "#C7E462", "#9CD357", "#7EBD7D", "#8FBB8F", "#5EC68C", "#43B3A9", "#5F9D9F", "#7DA5B8", "#99A3A9", "#8A88A5", "#6A60A7", "#5553A1", "#4F4D69", "#663E9A", "#5F2E94", "#7D0F79", "#850083", "#676767", "#6C6B6B", "#A35E58", "#77583A", "#8A6B30", "#CE5F36", "#CD5C5C", "#EF624C", "#FF6447", "#F46D42", "#FD8D3C", "#FD9E2C", "#FBC22F", "#CEC840", "#9ACD32", "#81BF5B", "#76C578", "#5CAB62", "#3DB170", "#44A09C", "#789790", "#778899", "#5F8ABB", "#4874B7", "#5465AE", "#425C86", "#433D85", "#322947", "#42138A", "#49007F", "#626262", "#7A5F5B", "#8C564B", "#A2763D", "#A2532C", "#B94B45", "#D9584C", "#FD4540", "#E34A34", "#F67922", "#F09821", "#DAA520", "#D0D223", "#BECE2B", "#7DBF41", "#65BC63", "#65D163", "#1ED56A", "#30A456", "#418371", "#6E7E8E", "#5678A0", "#4682B4", "#377EB3", "#3767B8", "#316397", "#2B3795", "#191A70", "#140C4E", "#3D0048", "#545454", "#4C4C4C", "#624F49", "#843C39", "#993933", "#C3372F", "#D6342C", "#EF3825", "#EE6C15", "#D0681E", "#DF8215", "#CF8215", "#C9A529", "#BCBD22", "#94A230", "#6AA242", "#4BA94A", "#33CD32", "#0FAE4F", "#2E8B58", "#565F67", "#353E49", "#416F9A", "#4294C6", "#3284BD", "#2C7EB8", "#2260AB", "#0E2986", "#053060", "#030723", "#444444", "#3F3F3F", "#514633", "#882C22", "#A52A2A", "#B22222", "#D92E23", "#E6550D", "#D85F0E", "#A66E1B", "#B8860B", "#A96404", "#A4A513", "#9CC419", "#6B8E23", "#637939", "#637163", "#34B54C", "#1D8C46", "#406157", "#181C23", "#276681", "#1F8E9B", "#2C92BC", "#287BD3", "#1F77B4", "#195D87", "#05467C", "#012E8B", "#000085", "#333333", "#2C2C2C", "#242620", "#8B4712", "#7A1F12", "#AE321A", "#E41812", "#F9512B", "#D44901", "#B25805", "#C27504", "#A19A01", "#7F7F00", "#79B002", "#67A81A", "#588F2C", "#566B2F", "#418341", "#30921C", "#2E562D", "#2F4E4E", "#1B465A", "#349592", "#20B2AA", "#2EA7DC", "#1A94CA", "#147EBC", "#025B8C", "#074E9D", "#0704A1", "#222222", "#1A1A1A", "#564C13", "#5C2B05", "#923104", "#DC3D12", "#FD4500", "#EB6500", "#D95F02", "#E08601", "#E4AD04", "#C9A700", "#AFC300", "#94D900", "#71E600", "#4E9D24", "#3D7327", "#2CA02C", "#228B22", "#1E5B1A", "#132439", "#097B99", "#1A9E76", "#1AB8BF", "#17BECF", "#11BECE", "#0090BF", "#056FAE", "#0257CD", "#0100CC", "#080808", "#111111", "#392216", "#850000", "#B30200", "#E70000", "#FD2E00", "#FF6701", "#FF7F00", "#FB9904", "#F7BB08", "#FFD700", "#FFFF00", "#C4FF00", "#7EFE00", "#48F700", "#2BCB10", "#129317", "#008E37", "#116D40", "#004029", "#008C6C", "#008B8C", "#02CC5D", "#0ED6B4", "#0FCBD8", "#00CDD1", "#00A3EB", "#0166FE", "#022AF6", "#000000", "#0A0605", "#380702", "#9A0100", "#CB0402", "#FF0000", "#FF201D", "#FF7F0E", "#FF8C00", "#FFA500", "#FECB02", "#F0E600", "#FBED34", "#ADFF2F", "#35F43C", "#00FE00", "#00B401", "#008000", "#016101", "#00652F", "#016658", "#008080", "#01B698", "#00FC8C", "#05FFB3", "#00FFFE", "#00BFFF", "#2091FE", "#371DFA", "#0000FF"];

var counts = [178, 165, 60, 121, 117, 2573, 10, 192, 179, 202, 181, 2, 152, 151, 311, 227, 179, 154, 86, 37, 45, 158, 117, 67, 155, 31, 208, 64, 170, 1, 211, 330, 59, 226, 52, 1, 18, 59, 39, 1, 161, 1, 1, 12, 44, 27, 15, 61, 199, 66, 38, 48, 2, 39, 44, 57, 7, 35, 2, 468, 551, 28, 76, 326, 5, 25, 274, 2, 171, 27, 166, 205, 3, 33, 74, 1, 156, 29, 10, 209, 253, 135, 48, 277, 5, 1, 178, 24, 207, 8, 214, 21, 7, 36, 136, 9, 1, 162, 24, 301, 6, 209, 153, 39, 51, 38, 42, 164, 211, 26, 67, 193, 22, 29, 225, 1, 23, 22, 5, 211, 28, 283, 203, 1, 50, 16, 163, 18, 25, 44, 150, 31, 52, 27, 51, 209, 41, 60, 46, 212, 229, 67, 165, 4, 159, 4, 492, 81, 163, 4, 453, 31, 1, 71, 24, 65, 22, 157, 175, 23, 153, 169, 62, 54, 2, 3, 12, 9, 11, 182, 8, 8, 153, 8, 154, 52, 43, 216, 52, 41, 21, 2, 149, 230, 7, 38, 217, 13, 153, 3, 18, 171, 50, 53, 10, 151, 38, 162, 73, 184, 15, 153, 11, 169, 159, 85, 234, 61, 41, 167, 446, 8, 12, 6, 1734, 6, 88, 14, 34, 155, 25, 93, 56, 41, 65, 173, 8, 31, 21, 49, 35, 16, 10, 5, 19, 41, 82, 503, 129, 71, 119, 23, 1, 19, 12, 1, 167, 34, 227, 22, 68, 228, 38, 35, 27, 4, 215, 6, 165, 57, 60, 160, 161, 152, 520, 34, 94, 79, 70, 85, 494, 717, 45, 162, 24, 22, 164, 2, 6, 169, 129, 99, 74, 38, 48, 46, 202, 201, 159, 36, 204, 38, 68, 35, 56, 101, 71, 32, 24, 70, 350, 11, 1, 72, 71, 169, 28, 158, 192, 66, 20, 153, 82, 26, 77, 79, 17, 15, 92, 29, 17, 91, 14, 197, 72, 40, 34, 41, 29, 84, 57, 25, 45, 16, 34, 40, 22, 13, 23, 164, 11, 61, 83, 19, 54, 27, 166, 11, 14, 166, 16, 33, 33, 21, 103, 22, 43, 100, 21, 503, 379, 11, 36, 20, 72, 30, 157, 37, 194, 42, 162, 47, 27, 6, 173, 32, 181, 32, 198, 19, 37, 158, 20, 49, 53, 23, 222, 15, 26, 194, 165, 7, 490, 26, 191, 26, 54, 36, 39, 16, 27, 159, 4, 3, 53, 78, 11, 17, 169, 23, 201, 4, 771, 66, 34, 59, 60, 165, 17, 60, 197, 50, 1, 67, 21, 34, 62, 72, 42, 183, 27, 13, 4, 491, 14, 13, 64, 165, 9, 158, 27, 65, 21, 104, 216, 74, 66, 34, 142, 32, 183, 71, 23, 21, 350, 165, 50, 137, 18, 63, 154, 6, 10, 2, 160, 63, 11, 4, 119, 16, 49, 39, 24, 47, 17, 590, 16, 56, 32, 369, 461, 20, 26, 177, 16, 30, 19, 43, 68, 22, 12, 6, 175, 27, 53, 3, 169, 40, 5, 15, 163, 19, 35, 157, 45, 52, 10, 57, 105, 18, 374, 50, 10, 42, 109, 13, 209, 60, 45, 64, 43, 57, 48, 45, 58, 49, 7, 514, 158, 36, 36, 9, 54, 1, 490, 1, 83, 111, 39, 185, 46, 125, 17, 455, 75, 5, 28, 29, 45, 26, 19, 215, 383, 7, 312, 38, 18, 10, 28, 11, 82, 34, 192, 15, 1, 1, 169, 67, 28, 13, 2706, 4, 21, 38, 36, 2064, 36, 511, 194, 483, 23, 9, 81, 160, 12, 234, 35, 669, 208, 103, 64, 241, 18, 319, 7, 230, 166, 193, 13, 1345];

var d3Nodes = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true, true, true, false, false, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, true, false, false, false, false, false, false, false, true, false, true, true, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

//svg sizes and margins
var margin = {left: 50, top: 70, right: 0, bottom: -30},
	width = 920,
	height = 570;

//The number of columns and rows of the heatmap
var MapColumns = 30,
	MapRows = 20;
	
///////////////////////////////////////////////////////////////////////////
/////////////////////// Create hexagon variables //////////////////////////
///////////////////////////////////////////////////////////////////////////

//The maximum radius the hexagons can have to still fit the screen
var hexRadius = d3.min([width/(Math.sqrt(3)*(MapColumns+3)),
						height/((MapRows+3)*1.5)]);

//Set the new height and width based on the max possible
//width = MapColumns*hexRadius*Math.sqrt(3);
//heigth = MapRows*1.5*hexRadius;//+0.5*hexRadius;

//Scale for the min and max hex sizes, based on circular sqrt
var hexSize = d3.scale.sqrt()
	.range([hexRadius*0.1,hexRadius*4])
	.domain([d3.min(counts), d3.max(counts)]);
	
//Initiate hexbin
var hexbin = d3.hexbin()
    .radius(hexRadius)
	.size([width, height])
	.x(function(d) { return d.xPos; })
	.y(function(d) { return d.yPos; });

//Calculate the center positions of each hexagon	
var points = [],
	counter = 0;
for (var i = 0; i < MapRows; i++) {
    for (var j = 0; j < MapColumns; j++) {
		points[counter] = {
			xPos: hexRadius * j * 1.75,
			yPos: hexRadius * i * 1.5,
			color: color[counter],
			counts: counts[counter],
			d3Nodes: d3Nodes[counter]
		}
		counter = counter + 1;
    }//for j
}//for i

///////////////////////////////////////////////////////////////////////////
////////////////////////////// Initiate SVG ///////////////////////////////
///////////////////////////////////////////////////////////////////////////

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

///////////////////////////////////////////////////////////////////////////
////////////////////// Draw hexagons and color them ///////////////////////
///////////////////////////////////////////////////////////////////////////

//Create the hexbin data
var hexData = hexbin(points);
//Add extra data to the hexbin result
hexData.forEach(function(d,i) {
	d.color = points[i].color; 
	d.counts = points[i].counts; 
	d.d3Nodes = points[i].d3Nodes;
});
//Sort from biggest to smallest hexbin
hexData.sort(function(a, b) { return b.counts - a.counts; })

//Draw the hexagons
svg.append("g")
    .selectAll(".hexagon")
    .data(hexData)
    .enter().append("path")
    .attr("class", "hexagon")
    .attr("d", function (d,i) {return "M" + d.x + "," + d.y + hexbin.hexagon(hexSize(d.counts)); })
	.style("stroke", function (d,i) { return d3.rgb(d.color).darker(1.5); })
	.style("stroke-opacity", 0.5)
	.style("stroke-width", 1)
    .style("fill", function (d,i) { return d.color; })
	.on("mouseover", mover)
	.on("mouseout", mout);
	
//Create second set for stroking of the D3 color nodes in the same size case
//These have to lay on top otherwise it looks ugly
var steelblue = "#4682B4",
	steelColor = "#F70282",
	d3Color = "#111111";
svg.append("g")
    .selectAll(".strokeHexagon")
    .data(hexData.filter(function(d) { return d.d3Nodes | d.color === steelblue; }))
    .enter().append("path")
    .attr("class", "strokeHexagon")
    .attr("d", function (d,i) {return "M" + d.x + "," + d.y + hexbin.hexagon(hexSize(d.counts)); })
	.style("stroke", function(d) { return (d.color === steelblue ? steelColor : d3Color); })
	.style("stroke-opacity", 0)
	.style("stroke-width", 2)
    .style("fill", "none");
	
///////////////////////////////////////////////////////////////////////////
///////////////// Mouse over and Mouse out functions //////////////////////
///////////////////////////////////////////////////////////////////////////

//Function to call when you mouseover a node
function mover(d,i) {
	$(this).popover({
		placement: 'auto top', //place the tooltip above the item
		container: '#chart', //the name (class or id) of the container
		trigger: 'manual',
		html : true,
		content: function() { //the html content to show inside the tooltip
			return "<span>" + d.color + "</span>"; }
	});
	$(this).popover('show');	
}

//Mouseout function
function mout(d,i) { 
	//Hide the tooltip
	$('.popover').each(function() {
		$(this).remove();
	}); 
};

////////////////////////////////////////////////////////////
////////////////// Button Activity /////////////////////////
////////////////////////////////////////////////////////////

var diffSize = true;

d3.select("#diffSizeButton").on("click", function () {
	
	if(showD3) {
		//Adjust the size of all
		//Adjust the stroke and stroke opacity depending on it being a d3 color (or steelblue) or not
		d3.selectAll(".hexagon")
			.transition().duration(1000)
			.attr("d", function (d,i) {return "M" + d.x + "," + d.y + hexbin.hexagon(hexSize(d.counts)); })
			.style("stroke", function (d,i) { 
				if(d.color === steelblue) return steelColor; 					//Steelblue should be pink
				else return (d.d3Nodes ? d3Color: d3.rgb(d.color).darker(1.5)); //The normal d3 colors can be dark grey
			})
			.style("stroke-opacity", function(d,i) { return (d.d3Nodes | d.color === steelblue ? 1 : 0.5); })
			.style("stroke-width", function (d,i) { return (d.d3Nodes | d.color === steelblue ? 2 : 1); });
			
		//Hide the extra hexagons that might've been present for the D3 node strokes in the same size case
		d3.selectAll(".strokeHexagon")
			.transition().duration(1000)
			.attr("d", function (d,i) {return "M" + d.x + "," + d.y + hexbin.hexagon(hexSize(d.counts)); })
			.style("stroke-opacity", 0);
	} else {
		//Adjust the size, stroke color and stroke opacity of all
		d3.selectAll(".hexagon")
			.transition().duration(1000)
			.attr("d", function (d,i) {return "M" + d.x + "," + d.y + hexbin.hexagon(hexSize(d.counts)); })
			.style("stroke", function (d,i) { return d3.rgb(d.color).darker(1.5); })
			.style("stroke-opacity", 0.5)
			.style("stroke-width", 1);
	}//else	
	
	diffSize = true;
});

//Make each node the same size
d3.select("#sameSizeButton").on("click", function() {

	//Adjust the size and the stroke
	d3.selectAll(".hexagon")
		.transition().duration(1000)
		.attr("d", function (d,i) {return "M" + d.x + "," + d.y + hexbin.hexagon(); })
		.style("stroke", function (d,i) { return d.color; })
		.style("stroke-opacity", 1)
		.style("stroke-width", 1);
		
	diffSize = false;		

	if(showD3) {	
		//Show the (normally hidden) nodes that lie on top of the visible nodes	
		d3.selectAll(".strokeHexagon")
			.transition().duration(1000)
			.attr("d", function (d,i) {return "M" + d.x + "," + d.y + hexbin.hexagon(); })
			.style("stroke-opacity", 1);
	} else {
		//Hide the (normally hidden) nodes that lie on top of the visible nodes
		d3.selectAll(".strokeHexagon")
			.transition().duration(1000)
			.attr("d", function (d,i) {return "M" + d.x + "," + d.y + hexbin.hexagon(); })
			.style("stroke-opacity", 0);			
	}//else

});

function switchHighlight() {

	showD3 = !showD3;
	
	if(diffSize) {
		//Highlight D3 colored nodes and steelblue
		d3.selectAll(".hexagon")
			.transition().duration(1000)
			.filter(function(d) { return d.d3Nodes | d.color === steelblue; })
			.style("stroke", function (d,i) { 
				if(d.color === steelblue) return (showD3 ? steelColor : d3.rgb(d.color).darker(1.5)); //Steelblue should be pink
				else return (showD3 ? d3Color : d3.rgb(d.color).darker(1.5)); //The normal d3 colors can be dark grey
			})
			.style("stroke-opacity", function (d,i) { return (showD3 ? 1 : 0.5); })
			.style("stroke-width", function (d,i) { return (showD3 ? 2 : 1); });
			
		//Hide the stroked hexagons, only needed for same size & show D3
		d3.selectAll(".strokeHexagon")
			.transition().duration(1000)
			.style("stroke-opacity", 0);
	} else {
		d3.selectAll(".strokeHexagon")
			.transition().duration(1000)
			.style("stroke-opacity", showD3 ? 1 : 0);
	}//else
		
}//function switchHighlight

var showD3 = false;
switchHighlight();
d3.select("#highlightD3").on("change", switchHighlight);