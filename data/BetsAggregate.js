db.bets.aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {marketId:"1.173928534",horse:"22121561"}
		},

		// Stage 2
		{
			$project: {
				"createdAt":"$matchedTime",
				"rates": "$betRate"
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
