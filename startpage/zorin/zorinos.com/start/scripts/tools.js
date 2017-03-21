function safeName(s) 
{
	return s.toLowerCase().replace(/[^a-z0-9_]/gi, '');
}

function firstProp(obj) 
{
	var first = true;
	for (prop in obj) {
		if (first) { return(prop) }
		first = false;
	}
}

function findNext(where, now) 
{
	var isNext = false;
	var next = null;
	for (item in where) {
		if (isNext) {
			next = item;
			isNext = false;
		}
		if (item == now) isNext = true;
	}
	if (next == null) next = firstProp(where);
	return next;
}

function inArray(needle, haystack) 
{
	return ((','+haystack.toString()+',').indexOf(','+needle+',')!==-1)
}

function numKeys(obj)
{
    var count = 0;
    for(var prop in obj)
    {
        count++;
    }
    return count;
}