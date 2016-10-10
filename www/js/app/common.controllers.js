angular.module('your_app_name.common.controllers', [])

.controller('AppCtrl', function($scope, $ionicHistory, logged_user) {

})


.controller('CustomMapCtrl', function($scope, $state, $rootScope, NgMap,  GeoCoder) {
    $scope.goBack = function() {
        var previous_view = _.last($rootScope.previousView);
        $state.go(previous_view.fromState, previous_view.fromParams );
    };

    /*$scope.geoFunc = function() {
     GeoCoder.geocode({address: 'KFC, Dolmen Mall, Tariq Road'}).then(function(result) {
     console.log('all good');
     });
     }*/
    // $scope.lat = "";
    // $scope.lng = "";
    // $scope.geoFunc = function() {
    //     GeoCoder.geocode({address: '249 Staff Lines, Ghazanfar Ali Rd, Saddar, Near Avari Towers, Karachi'}).then(function(result) {
    //         //... do something with result
    //         lat = result[0].geometry.location.lat();
    //         lng = result[0].geometry.location.lng();
    //         console.log('latitude : ' + lat);
    //         console.log('longtitude : ' + lng);
    //     });
    // }

    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });
})


.controller('CustomLoginCtrl', function($scope, $state, $ionicLoading, $ionicPopup, $timeout, $location, AuthenticationService, $cordovaOauth) {

var vm = this;

vm.login = login;

(function initController() {
    // reset login status
    AuthenticationService.ClearCredentials();
})();

function login() {
    vm.dataLoading = true;

    console.log(vm.user.username + '. . . . . ' + vm.user.password);
    console.log('asd');
    AuthenticationService.Login(vm.user.username, vm.user.password, function (response) {
        if (response.success) {
            AuthenticationService.SetCredentials(vm.username, vm.password);
            console.log(vm.user.username + '. . . . . ' + vm.user.password);
            $location.path('custom/filters');
        } else if (response.success == false) {

            console.log(response.message);
            console.log('asd');
            $ionicPopup.alert({
                title: 'ERROR',
                template: '<h5>Incorrect Credentials</h5>'
            });
            vm.dataLoading = false;
        }
    });
};


openFB.init({appId: '1429567050392769'});

$scope.FbLogin = function() {
    console.log('fired');
    openFB.login(
        function(response) {
            if(response.status === 'connected') {
                console.log('Facebook login succeeded, got access token: ' + response.authResponse.accessToken);
                $location.path('custom/filters');
            } else {
                console.log('Facebook login failed: ' + response.error);
            }
        }, {scope: 'email,read_stream,publish_actions'});
}


})


.controller('CustomSignupCtrl', function($scope, $state, $ionicLoading, $timeout, $ionicModal, UserService, $location, $rootScope) {

    var vm = this;

    vm.register = register;

    function register() {
        vm.dataLoading = true;
        UserService.Create(vm.user)
            .then(function (response) {
                if (response.success) {
                    console.log('Registration successful', true);
                    console.log(vm.user);
                    $location.path('/custom/login');
                } else {
                    console.log(response.message);
                    vm.dataLoading = false;
                }
            });
    }


})

.controller('CustomForgotPasswordCtrl', function($scope, $state, $ionicLoading, $timeout) {
    $scope.user = {};

    $scope.user.email = "";

    $scope.recoverPassword = function(){
        console.log("recover password");

        $ionicLoading.show({
            template: 'Recovering password...'
        });

        $timeout(function(){
            // Simulate login OK
            $state.go('custom.filters');
            $ionicLoading.hide();

            // Simulate login ERROR
            // $scope.error = "This is an error message";
            // $ionicLoading.hide();
        }, 800);
    };
})



.controller('CustomGettingStartedCtrl', function($scope, $state, $ionicSlideBoxDelegate, $ionicPopup, $timeout, sharedProperties) {

    $scope.skipIntro = function(){
        $state.go('cus.feed.fashion');
    }

    $scope.show_call_to_action_button = true;

    // Getting started questions
    $scope.browsing = 'Plus Size';

    $scope.pick_categories = {};
    $scope.pick_categories.fashion = true;
    $scope.pick_categories.travel = true;



    $scope.applyFilters = function() {

       var x, count = 0, y = 0, cat_link = 'main.app.feed';
        for (x in $scope.pick_categories) {
            if($scope.pick_categories[x] === true) {
                y++;
                console.log('value of category = ' + Object.keys($scope.pick_categories)[count]);
                console.log('value of pick_categories :' + $scope.pick_categories );
            }
            if(y === 1) {
                cat_link = cat_link + '.' + Object.keys($scope.pick_categories)[count];
                break;
            }
            count++;
        }
        //console.log(Object.keys($scope.pick_categories).length);


        if (y > 0) {
            sharedProperties.setProperty($scope.pick_categories);
            $state.go(cat_link);
        }
        else  {
            var alertPopup = $ionicPopup.alert({
                title: 'WARNING',
                template: '<h5>Please select atleast one filter</h5>'
            });
        }

        //console.log('cat_link = ' + cat_link);
        //console.log('cat = ' + cat);
        //console.log('y = ' + y);
        //console.log($scope.pick_categories);
    }

})

;
