(function ($) {
	$.fn.oddMenOut = function ()
	{
		return this.each(function ()
		{
			var $this = $(this);

			// get a list of each unique value as well as the number of times it's found.

			// get values
			var cell_index = $this.find("thead tr").find("th.oddMenOut-highlight").index();
			var row_tds = $("tr td:nth-child(" + (cell_index + 1) + ")")

			var row_values = row_tds.map(function ()
			{
				return $(this).text();
			}).get();

			// get unique values
			var unique = [];

			for (var i = 0; i < row_values.length; i++)
			{
				// if not found and not empty then add to array
				if (unique.indexOf(row_values[i]) === -1 && row_values[i] !== '')
					unique.push(row_values[i]);
			}

			// get times found for each unique value
			var counts = new Array(unique.length);

			for(var i=0; i<unique.length; i++)
			{
				var currentval = unique[i];
				var currentcount = 0;

				for(var j=0; j<row_values.length;j++)
				{
					if(row_values[j] == currentval)
						currentcount++;
				}
				counts[i] = currentcount++;
			}

			// find the value that has the highest number.
			// todo: what if there is more than one highest number?
			var highest_number = Math.max.apply(null, counts);

			// find the element in the unique array at the index
			var elementPos = counts.indexOf(highest_number);
			var highest_element = unique[elementPos];

			// highlight the rows that are not the value of the highest number.
			$this.find("tr td:nth-child(" + (cell_index + 1) + "):not(:contains('" + highest_element + "'))").css('background-color', 'red');
		});
	};
})(jQuery);