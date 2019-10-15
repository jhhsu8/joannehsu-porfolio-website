"use strict";

var routerApp = angular.module("routerApp");

//define a service called anchorSmoothScroll
routerApp.service('anchorSmoothScroll', function(){
    
    // This scrolling function from https://jsfiddle.net/y65G5/1975/
    this.scrollTo = function(eID) {
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID) - 60;
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }
    };
})

//define a service called webappsFactory
routerApp.service("webappsFactory", function() {
    
		var webApps = [{
			name: "Online Marketplace",
            description: "A marketplace website created in HTML5, CSS, PHP, SQL, JavaScript, jQuery, and AJAX. The website presents a simplified market system that trades food items through a marketplace. Vendors supply various food items to the marketplace, and customers procure food items from the marketplace and store them in their own pantries. (Username is \"jhsu\". Password is \"abc12\")",
            design: "HTML5, CSS, PHP, SQL, JavaScript, jQuery, and AJAX",
			link: "http://joahsu.com/final/home.php",
            code: "https://github.com/jhhsu8/marketplace",
			image: "../images/marketplace.jpg",
            css: "marketplace"
		}, {
			name: "Seattle City",
            description: "A website about Seattle City created in HTML5, CSS, Bootstrap, and AngularJS using Bower with Gulp. The website provides tourists and potential migrants from other parts of the country with essential information about the City of Seattle, Washington state. It covers several topics about the city, such as culture, climate, public transportation system, housing, expansion in technology industry, and recreational places.",
            design: "HTML5, CSS, Bootstrap, AngularJS; Responsive web design",
			link: "http://joahsu.com/seattle-city/index.html",
            code: "https://github.com/jhhsu8/seattlecity",
			image: "../images/seattle.jpg",
            css: "seattle"
		}, {
			name: "Classic Vehicles",
            description: "A fictional classic vehicles website created in HTML5, CSS, PHP, and XML. Developing this website involves the creation of forms, storage of form data in the database, use of data from databases, and web application security. (Username is \"jhsu\". Password is \"abc12!\")",
            design: "HTML5, CSS, PHP, SQL, XML",
			link: "http://joahsu.com/berkeley-classic-vehicles/login.php",
            code: "https://github.com/jhhsu8/classic-vehicles-website",
			image: "../images/classic-car.jpg",
            css: "classic"
		}, {
			name: "Travel Budget Calculator",
            description: "A travel budget calculator created in HTML5, CSS, Bootstrap and AngularJS using Bower with Gulp. The user enters the cost and count of each item and clicks on the calculate button to find the total cost. Invalid entries will trigger a warning.",
            design: "HTML5, CSS, Bootstrap, AngularJS; Responsive web design",
			link: "http://joahsu.com/travel-budget-calculator/index.html",
            code: "https://github.com/jhhsu8/travel-budget-calculator",
			image: "../images/travel.jpg",
            css: "calculator"
		}, {
			name: "Stopwatch",
            description: "A stopwatch/countdown timer created in XHTML, CSS and JavaScript. The application allows the user to start either a stopwatch or a countdown timer.",
            design: "XHTML, CSS, JavaScript",
			link: "http://joahsu.com/timers/timers.html",
            code: "https://github.com/jhhsu8/stopwatch",
			image: "../images/stopwatch.jpg",
            css: "timers"
		}, {
			name: "Guess Number Game",
            description: "A guess number game created in XHTML, CSS and JavaScript. In the game, the user enters a whole number from 1 to 999 in the box and presses the 'Guess the Number' button to guess the number entered in the box. The user will then be informed if the number guessed is greater than, less than or equal to the user's number. The total number of guesses will not exceed 10 times.",
            design: "XHTML, CSS, JavaScript",
			link: "http://joahsu.com/guess-number-game/guess-number.html",
            code: "https://github.com/jhhsu8/guess-number-game",
			image: "../images/numbers.jpg",
            css: "guessnumber"
		}, {
			name: "CAPTCHA Creation Form",
            description: "A CAPTCHA creation form created in HTML5, CSS and PHP. The application allows the user to create a CAPTCHA by inputing characters.",
            design: "HTML5, CSS, PHP",
            link: "http://joahsu.com/captcha/captcha.php",
            code: "https://github.com/jhhsu8/captcha-creation",
			image: "../images/captcha.png",
            css: "captcha"
		}, {
			name: "Widget Order Form",
            description: "An order processing form created in XHTML, CSS and JavaScript. Regular expressions are used to validate input fields.",
            design: "XHTML, CSS, JavaScript",
			link: "http://joahsu.com/widget-order-form/widgetOrderForm.html",
            code: "https://github.com/jhhsu8/widget-order-form",
			image: "../images/widgets.jpg",
            css: "orderform"
		}];
    //implement the function called getWebApps
    this.getWebApps = function() {
        return webApps;
    };
})

//define a service called javaappsFactory
routerApp.service("javaappsFactory", function() {
    
    var javaApps = [{
			name: "Finding All Genes (Java)",
            description: "Exercise from a Coursera course, 'Java Programming: Solving Problems with Software'. The Java program takes a DNA string and prints the number of genes found, the number of genes with longer than 60 bases, the number of genes whose CG-ratio is higher than 0.35, and the longest gene length found.",
			code: "https://github.com/jhhsu8/finding-all-genes/blob/master/FindAllGenes.java",
			image: "../images/genes.jpg",
            css: "genes"
		}, {
			name: "Baby Names (Java)",
            description: "Exercise from a Coursera course, 'Java Programming: Solving Problems with Software'. The Java program finds the numbers and ranks of baby names from the United States.",
			code: "https://github.com/jhhsu8/babynames/blob/master/BabyBirths.java",
			image: "../images/babynames.jpg",
            css: "names"
		}, {
			name: "Temperatures (Java)",
            description: "Exercise from a Coursera course, 'Java Programming: Solving Problems with Software'. The Java program finds the date with the coldest temperature and lowest humidity in a file and among files.",
			code: "https://github.com/jhhsu8/temperatures/blob/master/MinTemp.java",
			image: "../images/thermometer.jpg",
            css: "weather"
		}];
    
    //implement the function called getJavaApps 
    this.getJavaApps = function() {
        return javaApps;
    };
})

//define a service called resumeFactory 
routerApp.service("resumeFactory", function() {
		var resume = [{
            name: "Joanne Hsu's Resume",
            url: "https://drive.google.com/file/d/1H7QeTA6VT1-c7l3RFsvtG7ZD7cOT5GS8/preview"
		}];
    
    //implement the function called getResume
    this.getResume = function(index) {
        return resume[index];
    };
})

//define a service called referencesFactory 
routerApp.service("referencesFactory", function() {
		var references = [{
            id: 0,
            name: "Professor Brett Martin, HTML/CSS and PHP at UC Davis's Web Development Certification Program",
            quote: "Her level of insight to the materials is not common in my teaching experience.",
            url: "https://drive.google.com/file/d/1Ofk5w5V-lOqwglAgLly9sW3FYxl56al_/preview"
		}, {
            id: 1,
            name: "Professor Matthew Quinton, JavaScript at UC Davis's Web Development Certification Program",
            quote: "Her understanding of programming and design is tied to a passion for developing websites.",
            url: "https://drive.google.com/file/d/1lZHHM5jnMVK0_JUs0NYvxoQpKiHiXjuS/preview"
		}, {
            id: 2,
            name: "Professor Daniel Randall, Database Design and Management at UC Davis's Web Development Certification Program",
            quote: "Joanne has demonstrated her understanding of relational database theory and database design with outstanding results.",
            url: "https://drive.google.com/file/d/1b3DWDOmrUxDQc9_l4BhEAFjYU6YL1MAp/preview",
		}, {
            id: 3,
            name: "Professor Daniel Randall, Capstone Project at UC Davis's Web Development Certification Program",
            quote: "Joanne, a rare perfect score! Well deserved!",
            url: "https://drive.google.com/file/d/12cBbqX4-bAChswFVyNIPZNHtQlmJf-Xq/preview"
        }];
    
    //implement the functions called getReferences and getReference
    this.getReferences = function() {
        return references;
    };
    
    this.getReference = function(index) {
        return references[index];
    };
});