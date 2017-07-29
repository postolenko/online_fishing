$(document).ready(function() {
	
	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	$(window).resize(function() {
		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		getVisibleTHumbs();

	});

	var countThumbs = {
		desktop: {
			minWidth : 320,
			countVisibleRows: 2,
			countLoadingRows: 1
		},
		tab: {
			minWidth : 480,
			countVisibleRows: 2,
			countLoadingRows: 1
		},
		mob: {
			minWidth : 240,
			countVisibleRows: 3,
			countLoadingRows: 2
		}
	};

	// var maxWidth = 1180;
	var screenParam;
	var countRows;
	var countShowElem;

	var catalogThumbnailsWrapp = document.getElementsByClassName("catalog-inner")[0];
	var goodThumbnail = document.getElementsByClassName("good-thumbnail")[0];
	var goodThumbs = document.querySelectorAll(".catalog-inner .good-thumbnail");
	var loadBtn = document.getElementById("load");

	var flag = 1;

	var lastThumb = goodThumbs[goodThumbs.length - 1];

	var thumbnailHeight = goodThumbnail.offsetHeight;

	var topCoorCatalogThumbnailsWrapp;

	var topCoorLastThumb;

	var lastCoor;

	var bottomCoor;	

	// var animationStop = false;

	getCoords(catalogThumbnailsWrapp);

	getVisibleTHumbs();

	loadBtn.onclick = function() {

		// if(animationStop == false ) {

			flag++;

			getVisibleTHumbs()

		// }

	}	

	function getVisibleTHumbs() {

		for(var screenKey in countThumbs) {

			screenParam = countThumbs[screenKey].minWidth;

			if( bodyWidth > screenParam ) {

				countRows = countThumbs[screenKey].countVisibleRows;

				countShowElem = countThumbs[screenKey].countLoadingRows;

				topCoorCatalogThumbnailsWrapp = getCoords(catalogThumbnailsWrapp);

				topCoorLastThumb = getCoords(lastThumb);

				lastCoor = topCoorLastThumb + thumbnailHeight - topCoorCatalogThumbnailsWrapp;			

				bottomCoor = thumbnailHeight * countRows * flag;

				if ( lastCoor < bottomCoor ) {

					bottomCoor = lastCoor;

					catalogThumbnailsWrapp.style.height = bottomCoor + "px";

					loadBtn.style.display = "none";

				} else {

					loadBtn.style.display = "block";

				}

				catalogThumbnailsWrapp.style.height = bottomCoor + "px";

				// var catalogThumbnailsWrappActualHeight = catalogThumbnailsWrapp.offsetHeight;

				// var heightAnimationVal = bottomCoor - catalogThumbnailsWrappActualHeight;

				// var setHeightcatalogThumbnailsWrapp = setInterval(function() {

				// 	catalogThumbnailsWrappActualHeight++;

				// 	if(catalogThumbnailsWrappActualHeight >= bottomCoor) {

				// 		clearInterval(setHeightcatalogThumbnailsWrapp);

				// 		catalogThumbnailsWrapp.style.height = bottomCoor + "px";

				// 	}

				// 	catalogThumbnailsWrapp.style.height = catalogThumbnailsWrappActualHeight + "px";

				// }, 45);

				break;

			}

		}

	}

	function getCoords(coordElem) {

	  var box = coordElem.getBoundingClientRect();

	  var body = document.body;
	  var docEl = document.documentElement;

	  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;

	  var clientTop = docEl.clientTop || body.clientTop || 0;

	  var top = box.top + scrollTop - clientTop;

	  return top;

	}

});