import React, { useState } from "react";
import Nav from "./Nav";
import Hogs from "./Hogs";
import Filter from "./Filter";
import SortBy from "./SortBy";
import hogs from "../porkers_data";

function App() {
	const [greaseFilter, setGreaseFilter] = useState('All')
	const [sortByName, setSortByName] = useState(true)

  function handleSubmit(e){
    e.preventDefault()
    setGreaseFilter(e.target.value)
  }
	function handleChange(e){
    e.preventDefault()
		setSortByName(!sortByName)
		console.log(sortByName)
  }
	const itemsDisplayed = hogs.filter((hog) => { 
		if(greaseFilter==='All') return true

		else if (greaseFilter==='Greased'){
			return hog.greased===true
		}
		else if (greaseFilter==='Not Greased'){
			return hog.greased=== false
		}
		
		}
	)

	const sorted = itemsDisplayed.sort((a, b) => {
		let fa = a.name.toLowerCase(),
				fb = b.name.toLowerCase();

		if (fa < fb) {
				return -1;
		}
		if (fa > fb) {
				return 1;
		}
		return 0;
	});

	const byWeight = [...sorted].sort(
		(a, b) => {
			return a.weight - b.weight;
	})

	return (
		<div className="App">
			<Nav />
			<div className="ui eight wide column">
				<Filter handleSubmit={handleSubmit} greaseFilter={greaseFilter} />
				<SortBy handleChange={handleChange}/>
				<Hogs hogs={hogs} itemsDisplayed={sortByName ? sorted : byWeight} />
			</div>

		</div>
	);
}

export default App