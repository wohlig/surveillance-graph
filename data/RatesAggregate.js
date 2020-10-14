// Stages that have been excluded from the aggregation pipeline query
__3tsoftwarelabs_disabled_aggregation_stages = [

	{
		// Stage 6 - excluded
		stage: 6,  source: {
			$group: {
			_id:1,
			count:{$sum:1}
			}
		}
	},
]

db.rates.aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {marketId:"1.173928534"}
		},

		// Stage 2
		{
			$unwind: {
			    path : "$runners",
			}
		},

		// Stage 3
		{
			$match: {
			 "runners.selectionId":22121561
			}
		},

		// Stage 4
		{
			$project: {
			    createdAt:1,
			    rates:{ $arrayElemAt: [ "$runners.ex.availableToBack", 0 ] }
			}
		},

		// Stage 5
		{
			$project: {
				"createdAt":1,
				"rates": "$rates.price"
			}
		},
	],

	// Options
	{
		cursor: {
			batchSize: 50
		}
	}

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
