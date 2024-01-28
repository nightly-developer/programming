runtime_list = [int(runtime[0].split(' ')[0]) if isinstance(runtime,list)  else None if runtime == 'N/A' else int(runtime.split(' ')[0]) for runtime in [movie['Running time'] if 'Running time' in movie else 'N/A' for movie in movie_info_list]]

runtime_list = [ 
	for runtime in [
		for movie in movie_info_list
			if 'Running time' in movie 
				movie['Running time']
			else 
				'N/A' 
		]
		if isinstance(runtime,list) 
			int(runtime[0].split(' ')[0])
		else 
			if runtime == 'N/A'
				None  
			else 
				int(runtime.split(' ')[0]) 
	]

