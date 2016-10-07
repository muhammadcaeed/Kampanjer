angular.module('your_app_name.common.controllers', [])

.controller('AppCtrl', function($scope, $ionicHistory, logged_user) {

})

.controller('CustomLoginCtrl', function($scope, $state, $ionicLoading, $timeout) {
    $scope.user = {};

    $scope.user.email = "";
    $scope.user.password = "";
    // $scope.user.password = "12345";

    $scope.doLogIn = function(){
        console.log("doing log in");

        $ionicLoading.show({
            template: 'Loging in...'
        });

        $timeout(function(){
            // Simulate login OK
            $state.go('custom.filters');
            // $ionicLoading.hide();

            // Simulate login ERROR
            $scope.error = "This is an error message";
            $ionicLoading.hide();
        }, 800);
    };

    $scope.doFacebookLogIn = function(){
        console.log("doing FACEBOOK log in");

        $ionicLoading.show({
            template: 'Loging in...'
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


    .controller('CustomSignupCtrl', function($scope, $state, $ionicLoading, $timeout, $ionicModal) {
        $scope.user = {};

        $scope.user.name = "Marian Hill";
        $scope.user.email = "";
        $scope.user.password = "";

        $scope.doSignUp = function(){
            console.log("doing sign up");

            $ionicLoading.show({
                template: 'Creating account...'
            });

            $timeout(function(){
                // Simulate login OK
                // $state.go('main.app.feed.fashion');
                // $ionicLoading.hide();

                // Simulate login ERROR
                $scope.error = "This is an error message";
                $ionicLoading.hide();
            }, 800);
        };

        $scope.doFacebookSignUp = function(){
            console.log("doing FACEBOOK sign up");

            $ionicLoading.show({
                template: 'Creating account...'
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

        $ionicModal.fromTemplateUrl('views/legal/privacy-policy.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.privacy_policy_modal = modal;
        });

        $ionicModal.fromTemplateUrl('views/legal/terms-of-service.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.terms_of_service_modal = modal;
        });

        $scope.showTerms = function(){
            $scope.terms_of_service_modal.show();
        };

        $scope.showPrivacyPolicy = function(){
            $scope.privacy_policy_modal.show();
        };
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



.controller('CustomGettingStartedCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

    $scope.skipIntro = function(){
        $state.go('cus.feed.fashion');
    }

    $scope.show_call_to_action_button = true;


    // Getting started questions
    $scope.browsing = 'Plus Size';

    $scope.pick_categories = {};
    $scope.pick_categories.tops = true;
    $scope.pick_categories.jackets = true;

})

    /*
    .controller('CustomFashionContentCtrl', function($scope, $state, $ionicPopup, $rootScope, product, ShoppingCartService, $ionicLoading) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;

        $scope.addToCart = function(product) {
            $ionicLoading.show({
                template: 'Adding to cart',
                duration: 1000
            });

            product.qty = 1;
            product.size = "M";
            product.color = "black";
            ShoppingCartService.addProduct(product);
        };

        var colorPopup = {},
            sizePopup = {};

        $scope.chosen_color = 'Navy';
        $scope.chosen_size = 'M';

        $scope.openColorChooser = function(){
            colorPopup = $ionicPopup.show({
                cssClass: 'popup-outer color-chooser-view',
                templateUrl: 'views/custom/fashion/color-chooser.html',
                scope: angular.extend($scope, {chosen_color: $scope.chosen_color}),
                title: 'Color',
                buttons: [
                    { text: 'Close', type: 'close-popup' }
                ]
            });
        };

        $scope.openSizeChooser = function(){
            sizePopup = $ionicPopup.show({
                cssClass: 'popup-outer size-chooser-view',
                templateUrl: 'views/custom/fashion/size-chooser.html',
                scope: angular.extend($scope, {chosen_size: $scope.chosen_size}),
                title: 'Size',
                buttons: [
                    { text: 'Close', type: 'close-popup' }
                ]
            });
        };
    })

    .controller('CustomFoodContentCtrl', function($scope, $state, $rootScope, $ionicPopup, product) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;

        $scope.product.selected_schedule = {
            name: "Today 12:00 pm to 12:00 am"
        };

        $scope.product.dishes = [
            {
                name:"Sanduche pull pork",
                rating: 4
            },
            {
                name:"Bahmin",
                rating: 2
            }
        ];

        $scope.product.addresses = [
            {
                street: "0 Waubesa Junction",
                city: "Houston",
                state: "TX",
                postal_code: "77020",
                phone: "1-(713)471-0205",
                lat: 43.07493,
                lng: -89.381388
            },
            {
                street: "50 Northfield Way",
                city: "Brooklyn",
                state: "NY",
                postal_code: "11210",
                phone: "1-(347)846-3569",
                lat: 43.07493,
                lng: -88.381388
            }
        ];

        $scope.product.selected_address = product.addresses[0];

        $scope.selectAddress = function(address){
            $scope.product.selected_address = address;
            addressPopup.close();
        };

        var schedulesPopup = {},
            addressPopup = {};

        $scope.openSchedules = function(){
            schedulesPopup = $ionicPopup.show({
                cssClass: 'popup-outer food-schedules-view',
                templateUrl: 'views/custom/food/schedules.html',
                scope: angular.extend($scope, {}),
                title: 'More info',
                buttons: [
                    { text: 'Close', type: 'close-popup' }
                ]
            });
        };

        $scope.openAddresses = function(){
            addressPopup = $ionicPopup.show({
                cssClass: 'popup-outer food-addresses-view',
                templateUrl: 'views/custom/food/addresses.html',
                scope: angular.extend($scope, {addresses: $scope.product.addresses, selected_address: $scope.product.selected_address}),
                title: 'Addresses',
                buttons: [
                    { text: 'Close', type: 'close-popup' }
                ]
            });
        };

        $scope.$on('mapInitialized', function(event, map) {
            // If we want to access the map in the future
            $scope.map = map;
        });
    })

    .controller('CustomTravelContentCtrl', function($scope, $state, $rootScope, product) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;
    })

    .controller('CustomDealsContentCtrl', function($scope, $state, $rootScope, product) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;
    })

    .controller('CustomRealStateContentCtrl', function($scope, $state, $rootScope, product) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;
    })





    .controller('CustomFeedCtrl', function($scope,  $ionicScrollDelegate, ShoppingCartService) {
        $scope.getProductsInCart = function(){
            return ShoppingCartService.getProducts().length;
        };
    })

    .controller('CustomFashionCtrl', function($scope, $stateParams, products) {
        $scope.filters = $stateParams.filters;
        $scope.products = products;
    })

    .controller('CustomFoodCtrl', function($scope, products) {
        $scope.products = products;
    })

    .controller('CustomTravelCtrl', function($scope, products) {
        $scope.products = products;
    })

    .controller('CustomDealsCtrl', function($scope, products) {
        $scope.products = products;
    })

    .controller('CustomRealStateCtrl', function($scope, products) {
        $scope.products = products;
    })


    .controller('CustomFashionContentCtrl', function($scope, $state, $ionicPopup, $rootScope, product, ShoppingCartService, $ionicLoading) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;

        $scope.addToCart = function(product) {
            $ionicLoading.show({
                template: 'Adding to cart',
                duration: 1000
            });

            product.qty = 1;
            product.size = "M";
            product.color = "black";
            ShoppingCartService.addProduct(product);
        };

        var colorPopup = {},
            sizePopup = {};

        $scope.chosen_color = 'Navy';
        $scope.chosen_size = 'M';

        $scope.openColorChooser = function(){
            colorPopup = $ionicPopup.show({
                cssClass: 'popup-outer color-chooser-view',
                templateUrl: 'views/custom/fashion/color-chooser.html',
                scope: angular.extend($scope, {chosen_color: $scope.chosen_color}),
                title: 'Color',
                buttons: [
                    { text: 'Close', type: 'close-popup' }
                ]
            });
        };

        $scope.openSizeChooser = function(){
            sizePopup = $ionicPopup.show({
                cssClass: 'popup-outer size-chooser-view',
                templateUrl: 'views/custom/fashion/size-chooser.html',
                scope: angular.extend($scope, {chosen_size: $scope.chosen_size}),
                title: 'Size',
                buttons: [
                    { text: 'Close', type: 'close-popup' }
                ]
            });
        };
    })

    .controller('CustomFoodContentCtrl', function($scope, $state, $rootScope, $ionicPopup, product) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;

        $scope.product.selected_schedule = {
            name: "Today 12:00 pm to 12:00 am"
        };

        $scope.product.dishes = [
            {
                name:"Sanduche pull pork",
                rating: 4
            },
            {
                name:"Bahmin",
                rating: 2
            }
        ];

        $scope.product.addresses = [
            {
                street: "0 Waubesa Junction",
                city: "Houston",
                state: "TX",
                postal_code: "77020",
                phone: "1-(713)471-0205",
                lat: 43.07493,
                lng: -89.381388
            },
            {
                street: "50 Northfield Way",
                city: "Brooklyn",
                state: "NY",
                postal_code: "11210",
                phone: "1-(347)846-3569",
                lat: 43.07493,
                lng: -88.381388
            }
        ];

        $scope.product.selected_address = product.addresses[0];

        $scope.selectAddress = function(address){
            $scope.product.selected_address = address;
            addressPopup.close();
        };

        var schedulesPopup = {},
            addressPopup = {};

        $scope.openSchedules = function(){
            schedulesPopup = $ionicPopup.show({
                cssClass: 'popup-outer food-schedules-view',
                templateUrl: 'views/custom/food/schedules.html',
                scope: angular.extend($scope, {}),
                title: 'More info',
                buttons: [
                    { text: 'Close', type: 'close-popup' }
                ]
            });
        };

        $scope.openAddresses = function(){
            addressPopup = $ionicPopup.show({
                cssClass: 'popup-outer food-addresses-view',
                templateUrl: 'views/custom/food/addresses.html',
                scope: angular.extend($scope, {addresses: $scope.product.addresses, selected_address: $scope.product.selected_address}),
                title: 'Addresses',
                buttons: [
                    { text: 'Close', type: 'close-popup' }
                ]
            });
        };

        $scope.$on('mapInitialized', function(event, map) {
            // If we want to access the map in the future
            $scope.map = map;
        });
    })

    .controller('CustomTravelContentCtrl', function($scope, $state, $rootScope, product) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;
    })

    .controller('CustomDealsContentCtrl', function($scope, $state, $rootScope, product) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;
    })

    .controller('CustomRealStateContentCtrl', function($scope, $state, $rootScope, product) {
        $scope.goBack = function() {
            var previous_view = _.last($rootScope.previousView);
            $state.go(previous_view.fromState, previous_view.fromParams );
        };

        $scope.product = product;
    })


*/

;



