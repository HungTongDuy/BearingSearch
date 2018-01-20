import React from 'react';

class SearchResult extends React.Component {
	render() {
		return (
			<div>
				<div className="panel panel-default panel-result">
					<div className="panel-body">
						<Body_item_demo title={this.props.resultData} />
					</div>
				</div>
			</div>
		);
	};
}

var result = [
	{
		"id": 4,
		"d": 49.125,
		"D": 11.025,
		"B": 15.64,
		"C": 23.594,
		"T": 109.52,
		"kg": 0.78,
		"reference": "ADX12/AS12",
		"part_number": 4,
		"brands": "OOA",
		"bearing_type": 2
	},
	{
		"id": 4,
		"d": 49.125,
		"D": 11.025,
		"B": 15.64,
		"C": 23.594,
		"T": 109.52,
		"kg": 0.78,
		"reference": "ADX12/AS12",
		"part_number": 4,
		"brands": "OOA",
		"bearing_type": 2
	},
	{
		"id": 4,
		"d": 49.125,
		"D": 11.025,
		"B": 15.64,
		"C": 23.594,
		"T": 109.52,
		"kg": 0.78,
		"reference": "ADX12/AS12",
		"part_number": 4,
		"brands": "OOA",
		"bearing_type": 2
	}
];

function Body_item(props) {
	let img_path = "./public/images/Bearings/";

	let list_item = props.title.map((item, k) =>
		<div key={k} className="col-md-4 col-sm-4 col-xs-12 item_owl">
			<div className="slide-caption">
				<img src={img_path + item.bearing_type + ".png"} />
				<h3 className="slide-caption__title">{item.reference}</h3>
				<span>{item.brands}</span>
			</div>
		</div>
	);
	return (
		<div>
			{list_item}
		</div>
	);
}

function Item(props) {
	let img_path = "./public/images/Bearings/";

	return (
		<div className="col-md-4 col-sm-4 col-xs-12 item-result">
			<div className="item-product">
				<div className="left-product">
					<img src={img_path + props.item.bearing_type + ".png"} />
				</div>
				<div className="right-product">
					<h3 className="result-title">{props.item.reference}</h3>
					<span className="dimension">{props.item.d + "/" + props.item.D + "/" + props.item.B}</span>
					<span className="weight">{props.item.kg + " kg"}</span>
					<span className="brands">{props.item.brands}</span>
				</div>
			</div>
		</div>
	);
}

function Body_item_demo(props) {
	let img_path = "./public/images/Bearings/";

	let list_item = props.title.map(function (item, k) {

		return (
			<Item item={item} key={k} />
		);
	});

	return (
		<div>
			{list_item}
		</div>
	);
}

module.exports = SearchResult;
