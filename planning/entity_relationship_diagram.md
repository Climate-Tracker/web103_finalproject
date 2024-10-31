# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

Saved Regions

All Regions

Measures for a Given Region - this will be displayed above the chart when the measure is clicked on. Examples of measures are CO2 levels, air quality index, etc. 

CO2 Levels for All Regions

Air Quality Index for All Regions

Sea Levels for All Regions

Temperature for All Regions

Deforestation for All Regions

## Add the Entity Relationship Diagram

<img width="833" alt="Screenshot 2024-10-30 at 5 31 58 PM" src="https://github.com/user-attachments/assets/79b90aa7-6370-43ad-ab9d-7c57dcdc4ddd">


All Regions
| Column Name | Type | Description |
|-------------|------|-------------|
| region_id | integer | primary key |
| name | text | name of the region |

Saved Regions
| Column Name | Type | Description |
|-------------|------|-------------|
| region_id | integer | primary key |
| name | text | name of the region |

Measures for a Given Region
| Column Name | Type | Description |
|-------------|------|-------------|
| measure_id | integer | primary key, id for that measure |
| measure name | text | name of the measure |
| measure description | text | description of the measure |

CO2 Levels for All Regions
| Column Name | Type | Description |
|-------------|------|-------------|
| region_id | integer | primary key |
| measure_id | integer | id for that CO2 Levels |
| CO2 levels | float | CO2 level for that year |
| year | integer | Year of the CO2 measurement |

Air Quality Index for All Regions
| Column Name | Type | Description |
|-------------|------|-------------|
| region_id | integer | primary key |
| measure_id | integer | id for Air Quality Index|
| Air Quality Index | float | Air Quality Index for that year |
| year | integer | Year of the Air Quality Index measurement |

Sea Levels for All Regions
| Column Name | Type | Description |
|-------------|------|-------------|
| region_id | integer | primary key |
| measure_id | integer | id for Sea Levels|
| sea levels | float | Sea Level for that year |
| year | integer | Year of the Sea Levels measurement |

Temperature for All Regions
| Column Name | Type | Description |
|-------------|------|-------------|
| region_id | integer | primary key |
| measure_id | integer | id for Temperature|
| Temperature | float | Temperature for that year |
| year | integer | Year of the Temperature measurement |

Deforestation for All Regions
| Column Name | Type | Description |
|-------------|------|-------------|
| region_id | integer | primary key |
| measure_id | integer | id for Deforestation|
| Deforestation | float | Deforestation for that year |
| year | integer | Year of the Deforestation measurement |

Created on this Figma Page: https://www.figma.com/design/bHAUK08fDQkJnEXCIHYuRF/Climate-Change-Tracker?node-id=0-1&node-type=canvas&t=hmj87uCVJVG3zDFB-0
