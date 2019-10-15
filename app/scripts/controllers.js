"use strict";

var routerApp = angular.module("routerApp");

// let the framework transform url to a safe url
routerApp.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}])

// define a controller called JoanneController containing attributes/properties and functions
routerApp.controller("JoanneController", ["$location", "$scope", "webappsFactory", "javaappsFactory", "resumeFactory", "referencesFactory", "anchorSmoothScroll", function($location, $scope, webappsFactory, javaappsFactory, resumeFactory, referencesFactory, anchorSmoothScroll) {
    
    $scope.date = new Date();
    
    //when clicked, the page will scroll to a section with specified id.
    $scope.gotoElement = function (eID) {
        // set the location.hash to the id of the element
        $location.hash(eID);
        anchorSmoothScroll.scrollTo(eID);
    };
    
    //create itemized lists
    $scope.webApps = webappsFactory.getWebApps();
    $scope.javaApps = javaappsFactory.getJavaApps();
    $scope.resume = resumeFactory.getResume(0);
    $scope.references = referencesFactory.getReferences();
    
    //create a slideshow
    $scope.nextButton = false
    $scope.previousButton = true;
    
    $scope.references = referencesFactory.getReferences();
    var length = $scope.references.length;
    var current_index = 0;
    $scope.current_reference = referencesFactory.getReference(current_index);
    
    //disable or enable button
    function button(curr_idx) {
        if (curr_idx === length - 1) {
            $scope.nextButton = true;
        } else {
            $scope.nextButton = false;
        }
        
        if (curr_idx > 0) {
            $scope.previousButton = false;
        } else {
            $scope.previousButton = true;
        }
    }
    
    //next button
    $scope.next = function() {
        var next_index = current_index + 1;
        if (current_index < length - 1) {
            $scope.current_reference = referencesFactory.getReference(next_index);
            current_index++;
        }
        
        button(current_index); 
    };

    //previous button
    $scope.previous = function() {
        var previous_index = current_index - 1;
        if (current_index > 0) {
            $scope.current_reference = referencesFactory.getReference(previous_index);
            current_index--;
        }
        
        button(current_index); 
    };

}]);