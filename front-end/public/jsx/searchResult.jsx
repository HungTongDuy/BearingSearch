import React from 'react';

class SearchResult extends React.Component {

	roundDimension(inside, outside, thick) {
		var dimension = [];
		var element = {};
		if (Math.round(inside) == 0) {
			element.d = Math.round(inside);
		} else {
			element.d = inside;
		}

		if (Math.round(outside) == 0) {
			element.D = Math.round(outside);
		} else {
			element.D = outside;
		}

		if (Math.round(thick) == 0) {
			element.B = Math.round(thick);
		} else {
			element.B = thick;
		}
		
		return element;
	}

	render() {
		var img_path = "./public/images/Bearings/";
		var list_item = this.props.resultData.map((item, key) => {
			var defineClass = '';
			if ((key % 3) == 0) {
				defineClass = 'left';
			} else if ((key % 3) == 1) {
				defineClass = 'center';
			} else {
				defineClass = 'right';
			}

			var reference = item.reference;
			var splitReference = reference.split("/").map(function(item,k) {
				if ( k == 0) {
					return (<h3 key={k} className="result-title">{item}</h3>);
				} else {
					return (<h3 key={k} className="result-title">{"/"+item}</h3>);
				}
			});

			var roundedItem = this.roundDimension(item.d, item.D, item.B);
			
			return (
				<div key={key} className={"col-md-4 col-sm-4 col-xs-12 item-result " + defineClass}>
					<div className="item-product">
						<div className="border-product">
							<div className="left-product">
								<img src={img_path + item.part_number + ".png"} />
							</div>
							<div className="right-product">
								{splitReference}
								<span className="dimension">{roundedItem.d + " / " + roundedItem.D + " / " + roundedItem.B}</span>
								<span className="weight">{item.kg + " kg"}</span>
								<span className="brands">{item.brands}</span>
							</div>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="panel panel-default panel-result">
				<div className="panel-body">
					{list_item}
				</div>
			</div>
		);
	};
}

module.exports = SearchResult;
