# belly-button-challenge
UFT Data anlaytics

Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Instructions
Complete the following steps:

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use sample_values as the values for the bar chart.
Use otu_ids as the labels for the bar chart.
Use otu_labels as the hovertext for the chart.
Screenshot 2023-01-10 at 11 13 39 AM
Create a bubble chart that displays each sample.

Use otu_ids for the x values.
Use sample_values for the y values.
Use sample_values for the marker size.
Use otu_ids for the marker colors.
Use otu_labels for the text values.
Screenshot 2023-01-10 at 11 13 56 AM
Display the sample metadata, i.e., an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.

Screenshot 2023-01-10 at 11 13 47 AM

Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

Deploy your app to a free static page hosting service, such as GitHub Pages.

Advanced Challenge Assignment
Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
You will need to modify the example gauge code to account for values ranging from 0 through 9.
Update the chart whenever a new sample is selected.
Screenshot 2023-01-10 at 11 19 42 AM
