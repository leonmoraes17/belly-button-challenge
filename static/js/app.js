const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

d3.json(url).then(data => {
//populating the drop down menu by selecting the #selectData id and loading the json data set in that

    d3.select("#selDataset")
        .selectAll("option") // creating an option tag to store all incoming data name ids
        .data(data.names) //getting the name ids object ready to be uploaded in the option tag
        .enter()
        .append("option")  //appending the IncomingData.names ids to each option tag
        .text(id_no=>"case "+ id_no) //displaying the text that appears on the drop down
        .attr("values", id_no => id_no) ; // displaying the attributes of the option tag

        optionChanged(d3.select("#selDataset").property("value"));
});

function barChart(x,y, text) {
    let data = [{
        type: 'bar',
        x: x,
        y: y.map(a=>"OTU "+ a),
        text: text,
        orientation: 'h'

    }];

    let layout = {
        title: " Top 10 OTUs"
        
    };

    Plotly.newPlot('bar', data, layout);
}



function bubbleChart(x,y,text) {
    let tracebuuble = [{
        x: x,
        y : y,
        text : text,
        mode: 'markers',
        marker: { size : y,
        color: x.map(icolor => icolor)}

    }];

    let layout = {
        title : " OTU Values",
        xaxis: {
            title: {
              text: 'OTU ID',
            }
         }
        }
Plotly.newPlot('bubble', tracebuuble, layout);
};



function gauageChart(num) {
    let tracegauge = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: num,
            title: "Weekly Belly Button Washing Frequency",
            type: "indicator",
            mode: "gauge+number+delta", 
            gauge: {
                axis: { range: [null, 20], tickwidth: 1, tickcolor: "darkblue" },
                bar: { color: "black" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                  { range: [0, 5], color: "cyan" },
                  {range: [5,10], color: "purple" },
                  { range: [10, 20], color: "royalblue" }
                ]}
    }];
    Plotly.newPlot('gauge', tracegauge);
}



function Meta(data) {
    let ulist = d3.select("#sample-metadata");
    ulist.html("")
    let list = ulist.append("ul").text("values in Metadata");
    Object.entries(data).forEach(function([key, value]) {
        list.append("li").text(key + ":- " + value);
     });
     console.log(Object.entries(data))
     ////Using Object.entries()
//The Object.entries() function returns/converts object to  an array of entries. 
//An entry is an array of length 2, where entry[0] is the key and entry[1] is the value. 
//You can iterate through both keys and values simultaneously:
//FOr each function allows ypu to iterate over an array not object
//hence converting the objecrt "metadata" into an aaray

}

function optionChanged(value) {  
    d3.json(url).then ( data => {
        let metaData = data.metadata.filter( i => "case "+ i.id ==value ); 
        console.log(metaData); ///filters the data by Id from the drop down menu . sO the data.id is the value you choose from the option tag
        //which was appended earlier and now when u select a value from data.names
        //the on change  function is activated and in turns activates the "optionChange function"
        //The optionChange will now selectt he array only have the option chosen


        let sample = data.samples.filter(i =>"case "+ i.id == value);
        // we are filtering the data to match the drop down data 
        console.log(sample);

        // CreateHBar(sample[0].sample_values.slice(0,10).reverse(),sample[0].otu_ids.slice(0,10).reverse().map(a=>"OTU "+ a),sample[0].otu_labels.slice(0,10).reverse());
        barChart(sample[0].sample_values.sort((a,b) => b.sample_values - a.sample_value).slice(0,10).reverse(),sample[0].otu_ids.sort((a,b) => b.sample_values - a.sample_value).slice(0,10).reverse(), sample[0].otu_labels.slice(0,10).reverse());
        bubbleChart(sample[0].otu_ids,sample[0].sample_values, sample[0].otu_labels);
        Meta(metaData[0]);
        gauageChart(metaData[0].wfreq);
});
}

// OUTPUT: 
// console.log(metaData)
//     ANSWER : {id: 940, ethnicity: 'Caucasian', gender: 'F', age: 24, location: 'Beaufort/NC', …}
//     length
//     : 

// howeever
// Object.entries(data)
// ANSWER : 
// ['id', 940]
// ['ethnicity', 'Caucasian']
// ['gender', 'F']
// ['age', 24]
// ['location', 'Beaufort/NC']
// ['bbtype', 'I']
// ['wfreq', 2]

// ForEach function converts the array into a dictionary of keys and value by taking two paraments
// It can only convertt an array, hence the Object.entries converts it inot an array
