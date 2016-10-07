/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* global malarkey:false, moment:false */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _indexConfig = __webpack_require__(1);

	var _indexRoute = __webpack_require__(2);

	var _indexRun = __webpack_require__(3);

	var _adminPanelModule = __webpack_require__(4);

	var _adminPanelModule2 = _interopRequireDefault(_adminPanelModule);

	var _frontEndModule = __webpack_require__(29);

	var _frontEndModule2 = _interopRequireDefault(_frontEndModule);

	angular.module('sg', [_adminPanelModule2['default'], 'frontEnd']).constant('api', "http://sgaubg.herokuapp.com/api/").config(_indexConfig.config).config(_indexRoute.routerConfig).run(_indexRun.runBlock);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	config.$inject = ["$logProvider", "toastrConfig", "$provide", "$httpProvider"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.config = config;

	function config($logProvider, toastrConfig, $provide, $httpProvider) {
	  'ngInject';
	  // Enable log
	  $logProvider.debugEnabled(true);

	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;

	  //push the authInterceptor service
	  //$provide.factory('authorizeInterceptor', AuthInterceptor.httpAuthFactory);
	  $httpProvider.interceptors.push('AuthInterceptor');
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.routerConfig = routerConfig;

	function routerConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	  $stateProvider.state('adminPanel', {
	    abstract: true,
	    url: '/admin',
	    template: '<div ui-view></div>'
	  }).state('frontEnd', {
	    abstract: true,
	    url: '/',
	    template: '<div ui-view></div>'
	  });

	  $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	runBlock.$inject = ["$log", "AuthService", "PermissionStore"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.runBlock = runBlock;

	function runBlock($log, AuthService, PermissionStore) {
	  'ngInject';
	  $log.debug('runBlock end');

	  PermissionStore.definePermission('anonymous', function () {
	    return !AuthService.currentUser();
	  });

	  PermissionStore.definePermission('admin', function () {
	    return AuthService.currentUser().userRole == "admin";
	  });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _route = __webpack_require__(5);

	var _config = __webpack_require__(6);

	var _componentsTeam_membersTeamController = __webpack_require__(7);

	var _componentsProfessorsProfessorsController = __webpack_require__(8);

	var _componentsUsersLoginController = __webpack_require__(9);

	var _componentsClubsClubsController = __webpack_require__(10);

	var _componentsInternshipsInternshipsController = __webpack_require__(11);

	var _componentsTeam_membersAddTeamMemberAddTeamMemberController = __webpack_require__(12);

	var _componentsClubsAddClubAddClubController = __webpack_require__(13);

	var _componentsProfessorsAddProfessorAddProfessorController = __webpack_require__(14);

	var _componentsInternshipsAddInternshipAddInternshipController = __webpack_require__(15);

	var _componentsProfessorsProfessorDetailsProfessorDetailsController = __webpack_require__(16);

	var _componentsClubsClubDetailsClubDetailsController = __webpack_require__(17);

	var _componentsUsersAuthService = __webpack_require__(18);

	var _componentsTeam_membersTeamMemberServiceJs = __webpack_require__(19);

	var _componentsProfessorsProfessorsService = __webpack_require__(20);

	var _componentsInternshipsInternshipsService = __webpack_require__(21);

	var _componentsClubsClubsService = __webpack_require__(22);

	var _servicesTransformRequestService = __webpack_require__(23);

	var _componentsUsersAuthInterceptorService = __webpack_require__(24);

	//intercept http requests and put tokens on them

	var _directivesNavbarNavbarDirective = __webpack_require__(25);

	var _directivesMenuButtonMenuButtonDirective = __webpack_require__(26);

	var _componentsInternshipsInternshipDirective = __webpack_require__(27);

	var _componentsTeam_membersTeam_memberDirective = __webpack_require__(28);

	var adminModule = 'adminPanel';
	angular.module(adminModule, ['ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'permission', 'permission.ui', 'ui.bootstrap', 'toastr', 'ngFileUpload', 'angularSpinner']).constant('api', "http://sgaubg.herokuapp.com/api/").config(_route.AdminRouterConfig).config(_config.AdminConfig).service('AuthService', _componentsUsersAuthService.AuthService).service('TeamMemberService', _componentsTeam_membersTeamMemberServiceJs.TeamMemberService).service('InternshipsService', _componentsInternshipsInternshipsService.InternshipsService).service('ClubsService', _componentsClubsClubsService.ClubsService).service('ProfessorsService', _componentsProfessorsProfessorsService.ProfessorsService).service('AuthInterceptor', _componentsUsersAuthInterceptorService.AuthInterceptor).service('TransformRequestService', _servicesTransformRequestService.TransformRequestService).controller('TeamController', _componentsTeam_membersTeamController.TeamController).controller('ProfessorsController', _componentsProfessorsProfessorsController.ProfessorsController).controller('LoginController', _componentsUsersLoginController.LoginController).controller('InternshipsController', _componentsInternshipsInternshipsController.InternshipsController).controller('ClubsController', _componentsClubsClubsController.ClubsController).controller('AddTeamMemberController', _componentsTeam_membersAddTeamMemberAddTeamMemberController.AddTeamMemberController).controller('AddProfessorController', _componentsProfessorsAddProfessorAddProfessorController.AddProfessorController).controller('AddClubController', _componentsClubsAddClubAddClubController.AddClubController).controller('AddInternshipController', _componentsInternshipsAddInternshipAddInternshipController.AddInternshipController).controller('ProfessorDetailsController', _componentsProfessorsProfessorDetailsProfessorDetailsController.ProfessorDetailsController).controller('ClubDetailsController', _componentsClubsClubDetailsClubDetailsController.ClubDetailsController).directive('acmeNavbar', _directivesNavbarNavbarDirective.NavbarDirective).directive('menuButton', _directivesMenuButtonMenuButtonDirective.MenuButtonDirective).directive('internship', _componentsInternshipsInternshipDirective.InternshipDirective).directive('teamMember', _componentsTeam_membersTeam_memberDirective.TeamMemberDirective);

	exports['default'] = adminModule;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by test most on 5/4/2016.
	 */
	'use strict';

	AdminRouterConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.AdminRouterConfig = AdminRouterConfig;

	function AdminRouterConfig($stateProvider, $urlRouterProvider) {
	  'ngInject';
	  $stateProvider.state('adminPanel.login', {
	    url: '/login',
	    templateUrl: 'app/adminPanel/components/users/login.html',
	    controller: 'LoginController',
	    controllerAs: 'login'
	  }).state('adminPanel.dashboard', {
	    url: '/dashboard',
	    templateUrl: 'app/adminPanel/components/dashboard/dashboard.html',
	    controllerAs: 'dashboard',
	    data: {
	      permissions: {
	        only: 'admin',
	        redirectTo: 'adminPanel.login'
	      }
	    }
	  }).state('adminPanel.team', {
	    url: '/team',
	    templateUrl: 'app/adminPanel/components/team_members/team.html',
	    controller: 'TeamController',
	    controllerAs: 'team',
	    data: {
	      permissions: {
	        only: 'admin',
	        redirectTo: 'adminPanel.login'
	      }
	    }
	  }).state('adminPanel.professors', {
	    url: '/professors',
	    templateUrl: 'app/adminPanel/components/professors/professors.html',
	    controller: 'ProfessorsController',
	    controllerAs: 'prof',
	    data: {
	      permissions: {
	        only: 'admin',
	        redirectTo: 'adminPanel.login'
	      }
	    }
	  }).state('adminPanel.professorDetails', {
	    url: '/professors/:professorId',
	    templateUrl: 'app/adminPanel/components/professors/professorDetails/professorDetails.html',
	    controller: 'ProfessorDetailsController',
	    controllerAs: 'profDetail',
	    data: {
	      permissions: {
	        only: 'admin',
	        redirectTo: 'adminPanel.login'
	      }
	    }
	  }).state('adminPanel.clubs', {
	    url: '/clubs',
	    templateUrl: 'app/adminPanel/components/clubs/clubs.html',
	    controller: 'ClubsController',
	    controllerAs: 'clubsCtrl',
	    data: {
	      permissions: {
	        only: 'admin',
	        redirectTo: 'adminPanel.login'
	      }
	    }
	  }).state('adminPanel.clubDetails', {
	    url: '/clubs/:clubId',
	    templateUrl: 'app/adminPanel/components/clubs/clubDetails/clubDetails.html',
	    controller: 'ClubDetailsController',
	    controllerAs: 'clubDetail',
	    data: {
	      permissions: {
	        only: 'admin',
	        redirectTo: 'adminPanel.login'
	      }
	    }
	  }).state('adminPanel.internships', {
	    url: '/internships',
	    templateUrl: 'app/adminPanel/components/internships/internships.html',
	    controller: 'InternshipsController',
	    controllerAs: 'internCtrl',
	    data: {
	      permissions: {
	        only: 'admin',
	        redirectTo: 'adminPanel.login'
	      }
	    }
	  });

	  $urlRouterProvider.otherwise('/login');
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Created by test most on 5/4/2016.
	 */
	'use strict';

	AdminConfig.$inject = ["$logProvider", "toastrConfig", "$httpProvider"];
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.AdminConfig = AdminConfig;

	function AdminConfig($logProvider, toastrConfig, $httpProvider) {
	  'ngInject';
	  // Enable log
	  $logProvider.debugEnabled(true);

	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 2000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;

	  //push the authInterceptor service
	  //$provide.factory('authorizeInterceptor', AuthInterceptor.httpAuthFactory);
	  $httpProvider.interceptors.push('AuthInterceptor');
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SERVICE = new WeakMap();

	var TeamController = (function () {
	  TeamController.$inject = ["$modal", "$scope", "$window", "TeamMemberService"];
	  function TeamController($modal, $scope, $window, TeamMemberService) {
	    'ngInject';

	    var _this = this;

	    _classCallCheck(this, TeamController);

	    SERVICE.set(this, TeamMemberService.resource);
	    this.$window = $window;
	    this.$modal = $modal;
	    this.$scope = $scope;

	    console.log($window.sessionStorage["userInfo"]);

	    //--------- PAGINATION PROPERTIES ----------
	    this.paginationRange = [];
	    this.currentPage = 1;
	    this.numPerPage = 10;
	    this.maxSize = 5;

	    $scope.$on("memberDeleted", function () {
	      _this.getTeamMembers();
	    });
	    $scope.$on("cancelEditing", function () {
	      _this.getTeamMembers();
	    });

	    this.getTeamMembers();
	  }

	  _createClass(TeamController, [{
	    key: "getTeamMembers",
	    value: function getTeamMembers() {
	      var _this2 = this;

	      this.loading = true;
	      SERVICE.get(this).query().$promise.then(function (response) {
	        _this2.teamMembers = response;
	        console.log(response);
	        _this2.pageChanged();
	      }, function (error) {
	        console.log(error);
	      })["finally"](function () {
	        _this2.loading = false;
	      });
	    }
	  }, {
	    key: "addMember",
	    value: function addMember() {
	      this.$modal.open({
	        animation: true,
	        templateUrl: 'app/adminPanel/components/team_members/addTeamMember/addTeamMember.html',
	        controller: 'AddTeamMemberController',
	        controllerAs: 'atm',
	        size: 'md'
	      });
	    }
	  }, {
	    key: "deleteTeamMember",
	    value: function deleteTeamMember(memberId) {
	      if (this.$window.confirm('You sure you want to delete this member?')) {
	        SERVICE.get(this)["delete"]({ memberId: memberId }).$promise.then(function (success) {}, function (error) {
	          console.log(error.statusText);
	        });
	      }
	    }

	    //---------------- PAGINATION -----------------
	  }, {
	    key: "pageChanged",
	    value: function pageChanged() {
	      var begin = (this.currentPage - 1) * this.numPerPage,
	          end = begin + this.numPerPage;
	      this.paginationRange = this.teamMembers.slice(begin, end);
	    }
	  }]);

	  return TeamController;
	})();

	exports.TeamController = TeamController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Created by AcerPC on 3/31/2016.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();
	var edor = {};

	var ProfessorsController = (function () {
	  ProfessorsController.$inject = ["$modal", "ProfessorsService", "$scope"];
	  function ProfessorsController($modal, ProfessorsService, $scope) {
	    'ngInject';

	    _classCallCheck(this, ProfessorsController);

	    SERVICE.set(edor, ProfessorsService.resource);
	    this.$modal = $modal;
	    this.filtText = '';
	    this.tab = 1;

	    $scope.$on('professorAdded', this.getProfessors);

	    this.getProfessors();

	    //--------- PAGINATION PROPERTIES ----------
	    this.paginationRange = [];
	    this.currentPage = 1;
	    this.numPerPage = 10;
	    this.maxSize = 5;
	  }

	  //---------- NAVIGATION ------------

	  _createClass(ProfessorsController, [{
	    key: 'select',
	    value: function select(setTab) {
	      this.tab = setTab;
	      if (setTab === 2) {
	        this.filtText = "bus";
	      } else if (setTab === 3) {
	        this.filtText = "cos";
	      } else if (setTab === 4) {
	        this.filtText = "eco";
	      } else if (setTab === 5) {
	        this.filtText = "eng";
	      } else if (setTab === 6) {
	        this.filtText = "hty";
	      } else if (setTab === 7) {
	        this.filtText = "inf";
	      } else if (setTab === 8) {
	        this.filtText = "jmc";
	      } else if (setTab === 9) {
	        this.filtText = "mat";
	      } else if (setTab === 10) {
	        this.filtText = "pos";
	      } else {
	        this.filtText = "";
	      }
	    }
	  }, {
	    key: 'isSelected',
	    value: function isSelected(checkTab) {
	      return this.tab === checkTab;
	    }
	  }, {
	    key: 'addProfessor',
	    value: function addProfessor() {
	      this.$modal.open({
	        animation: true,
	        templateUrl: 'app/adminPanel/components/professors/addProfessor/addProfessor.html',
	        controller: 'AddProfessorController',
	        controllerAs: 'apr',
	        size: 'md'
	      });
	    }
	  }, {
	    key: 'getProfessors',
	    value: function getProfessors() {
	      var _this = this;

	      this.loading = true;
	      SERVICE.get(edor).query().$promise.then(function (result) {
	        _this.professorsArray = result;
	        _this.pageChanged();
	      }, function (error) {
	        console.log(error);
	      })['finally'](function () {
	        _this.loading = false;
	      });
	    }

	    //------------ PAGINATION ------------
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {
	      var begin = (this.currentPage - 1) * this.numPerPage,
	          end = begin + this.numPerPage;
	      this.paginationRange = this.professorsArray.slice(begin, end);
	    }
	  }]);

	  return ProfessorsController;
	})();

	exports.ProfessorsController = ProfessorsController;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Created by AcerPC on 3/31/2016.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SCOPE = new WeakMap();
	var STATE = new WeakMap();
	var TOASTR = new WeakMap();

	var LoginController = (function () {
	  LoginController.$inject = ["$state", "toastr", "AuthService", "$scope"];
	  function LoginController($state, toastr, AuthService, $scope) {
	    'ngInject';

	    _classCallCheck(this, LoginController);

	    SCOPE.set(this, $scope);
	    this.AuthService = AuthService;
	    this.toastr = toastr;
	    this.$state = $state;
	    STATE.set(this, $state);
	    TOASTR.set(this, toastr);

	    /** @ngInject */
	  }

	  //------------------ LOGIN ------------------

	  _createClass(LoginController, [{
	    key: 'login',
	    value: function login(user) {
	      var _this = this;

	      this.AuthService.login(user).then(function (result) {

	        //console.log(result);
	        STATE.get(_this).go('adminPanel.dashboard');
	        TOASTR.get(_this).success("Login Successful!");
	      });
	    }
	  }, {
	    key: 'register',
	    value: function register(regUser) {
	      //todo when api is ready
	      //this.AuthService.register(regUser).then(
	      //  function() {
	      //    this.$state.go('login');
	      //  },
	      //  function(error){
	      //    this.status = error;
	      //  }
	      //);
	      console.log(regUser);
	      this.change();
	      this.toastr.success("Registration Successful, Log in now");
	    }
	  }, {
	    key: 'showToastr',
	    value: function showToastr() {
	      this.toastr.success('Login Successful');
	      this.classAnimation = '';
	    }
	  }, {
	    key: 'change',
	    value: function change() {
	      $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
	    }
	  }]);

	  return LoginController;
	})();

	exports.LoginController = LoginController;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();

	var ClubsController = (function () {
	  ClubsController.$inject = ["$modal", "ClubsService"];
	  function ClubsController($modal, ClubsService) {
	    'ngInject';

	    _classCallCheck(this, ClubsController);

	    this.$modal = $modal;
	    SERVICE.set(this, ClubsService.resource);

	    //--------- PAGINATION PROPERTIES ----------
	    this.paginationRange = [];
	    this.currentPage = 1;
	    this.numPerPage = 10;
	    this.maxSize = 5;

	    this.getClubs();
	  }

	  _createClass(ClubsController, [{
	    key: 'getClubs',
	    value: function getClubs() {
	      var _this = this;

	      this.loading = true;
	      SERVICE.get(this).query().$promise.then(function (response) {
	        _this.clubs = response;
	        _this.pageChanged();
	      }, function (error) {
	        console.log(error);
	      })['finally'](function () {
	        _this.loading = false;
	      });
	    }
	  }, {
	    key: 'addClub',
	    value: function addClub() {
	      this.$modal.open({
	        animation: true,
	        templateUrl: 'app/adminPanel/components/clubs/addClub/addClub.html',
	        controller: 'AddClubController',
	        controllerAs: 'acc',
	        size: 'md'
	      });
	    }

	    //------------ PAGINATION ------------
	  }, {
	    key: 'pageChanged',
	    value: function pageChanged() {
	      var begin = (this.currentPage - 1) * this.numPerPage,
	          end = begin + this.numPerPage;
	      this.paginationRange = this.clubs.slice(begin, end);
	    }
	  }]);

	  return ClubsController;
	})();

	exports.ClubsController = ClubsController;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SERVICE = new WeakMap();

	var InternshipsController = (function () {
	  InternshipsController.$inject = ["$window", "$modal", "InternshipsService", "$scope"];
	  function InternshipsController($window, $modal, InternshipsService, $scope) {
	    'ngInject';

	    var _this = this;

	    _classCallCheck(this, InternshipsController);

	    this.$modal = $modal;
	    this.$window = $window;
	    SERVICE.set(this, InternshipsService.resource);

	    //--------- PAGINATION PROPERTIES ----------
	    this.paginationRange = [];
	    this.currentPage = 1;
	    this.numPerPage = 10;
	    this.maxSize = 5;

	    $scope.$on("internshipDeleted", function () {
	      _this.getInternships();
	    });
	    $scope.$on("cancelInternshipEditing", function () {
	      _this.getInternships();
	    });
	    this.getInternships();
	  }

	  _createClass(InternshipsController, [{
	    key: "getInternships",
	    value: function getInternships() {
	      var _this2 = this;

	      this.loading = true;
	      SERVICE.get(this).query().$promise.then(function (response) {
	        _this2.internshipsArray = response;
	        _this2.pageChanged();
	      }, function (error) {
	        console.log(error);
	      })["finally"](function () {
	        _this2.loading = false;
	      });
	    }
	  }, {
	    key: "addInternship",
	    value: function addInternship() {
	      this.$modal.open({
	        animation: true,
	        templateUrl: 'app/adminPanel/components/internships/addInternship/addInternship.html',
	        controller: 'AddInternshipController',
	        controllerAs: 'aic',
	        size: 'md'
	      });
	    }

	    //------------ PAGINATION ------------
	  }, {
	    key: "pageChanged",
	    value: function pageChanged() {
	      var begin = (this.currentPage - 1) * this.numPerPage,
	          end = begin + this.numPerPage;
	      this.paginationRange = this.internshipsArray.slice(begin, end);
	    }
	  }]);

	  return InternshipsController;
	})();

	exports.InternshipsController = InternshipsController;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();

	var AddTeamMemberController = (function () {
	  AddTeamMemberController.$inject = ["TeamMemberService", "$modalInstance"];
	  function AddTeamMemberController(TeamMemberService, $modalInstance) {
	    'ngInject';

	    _classCallCheck(this, AddTeamMemberController);

	    this.$modalInstance = $modalInstance;
	    SERVICE.set(this, TeamMemberService.resource);
	  }

	  _createClass(AddTeamMemberController, [{
	    key: 'add',
	    value: function add() {
	      this.member['wrapper'] = 'team_member';
	      SERVICE.get(this).add({}, this.member);
	      this.$modalInstance.dismiss();
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.$modalInstance.dismiss();
	    }
	  }]);

	  return AddTeamMemberController;
	})();

	exports.AddTeamMemberController = AddTeamMemberController;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();
	var clubs = {};
	var professors = {};

	var AddClubController = (function () {
	  AddClubController.$inject = ["$modalInstance", "ClubsService", "ProfessorsService"];
	  function AddClubController($modalInstance, ClubsService, ProfessorsService) {
	    'ngInject';

	    _classCallCheck(this, AddClubController);

	    this.$modalInstance = $modalInstance;
	    SERVICE.set(clubs, ClubsService.resource);
	    SERVICE.set(professors, ProfessorsService.resource);

	    this.getProfessors();
	  }

	  _createClass(AddClubController, [{
	    key: 'getProfessors',
	    value: function getProfessors() {
	      var _this = this;

	      SERVICE.get(professors).query().$promise.then(function (response) {
	        _this.professorsArray = response;
	        console.log(response);
	      }, function () {});
	    }
	  }, {
	    key: 'add',
	    value: function add() {

	      this.newClub['wrapper'] = 'club';
	      SERVICE.get(clubs).add({}, this.newClub);
	      this.$modalInstance.dismiss();
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.$modalInstance.dismiss();
	    }
	  }]);

	  return AddClubController;
	})();

	exports.AddClubController = AddClubController;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();

	var AddProfessorController = (function () {
	  AddProfessorController.$inject = ["ProfessorsService", "$rootScope", "$modalInstance", "$scope"];
	  function AddProfessorController(ProfessorsService, $rootScope, $modalInstance, $scope) {
	    'ngInject';

	    _classCallCheck(this, AddProfessorController);

	    SERVICE.set(this, ProfessorsService.resource);
	    this.$modalInstance = $modalInstance;
	    this.$rootScope = $rootScope;
	    this.$scope = $scope;
	  }

	  _createClass(AddProfessorController, [{
	    key: 'add',
	    value: function add() {
	      this.newProfessor['wrapper'] = 'professor';
	      SERVICE.get(this).add({}, this.newProfessor);
	      this.$modalInstance.dismiss();
	    }
	  }, {
	    key: 'closeRegistrationForm',
	    value: function closeRegistrationForm() {
	      this.$modalInstance.dismiss();
	    }
	  }]);

	  return AddProfessorController;
	})();

	exports.AddProfessorController = AddProfessorController;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();
	var internship = {};

	var AddInternshipController = (function () {
	  AddInternshipController.$inject = ["$modalInstance", "InternshipsService"];
	  function AddInternshipController($modalInstance, InternshipsService) {
	    'ngInject';

	    _classCallCheck(this, AddInternshipController);

	    SERVICE.set(internship, InternshipsService.resource);
	    this.$modalInstance = $modalInstance;
	  }

	  _createClass(AddInternshipController, [{
	    key: 'add',
	    value: function add() {
	      this.newInternship['wrapper'] = 'internship';
	      SERVICE.get(internship).add({}, this.newInternship);
	      this.$modalInstance.dismiss();
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.$modalInstance.dismiss();
	    }
	  }]);

	  return AddInternshipController;
	})();

	exports.AddInternshipController = AddInternshipController;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();

	var ProfessorDetailsController = (function () {
	  ProfessorDetailsController.$inject = ["$modal", "$scope", "$stateParams", "ProfessorsService", "$state", "$window"];
	  function ProfessorDetailsController($modal, $scope, $stateParams, ProfessorsService, $state, $window) {
	    'ngInject';

	    _classCallCheck(this, ProfessorDetailsController);

	    this.$scope = $scope;
	    this.$modal = $modal;
	    this.$state = $state;
	    this.$window = $window;
	    SERVICE.set(this, ProfessorsService.resource);

	    this.getProfessor($stateParams.professorId);
	  }

	  _createClass(ProfessorDetailsController, [{
	    key: 'getProfessor',
	    value: function getProfessor(professorId) {
	      var _this = this;

	      SERVICE.get(this).get({ professorId: professorId }).$promise.then(function (result) {
	        _this.professorDetails = result;
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      this.professorDetails['wrapper'] = 'professor';
	      SERVICE.get(this).update({ professorId: this.professorDetails.id }, this.professorDetails).$promise.then(function (response) {
	        console.log(response);
	      }, function () {});
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.getProfessor(this.professorDetails.id);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var _this2 = this;

	      if (this.$window.confirm('You sure you want to delete this Professor?')) {
	        SERVICE.get(this)['delete']({ professorId: this.professorDetails.id }).$promise.then(function () {
	          _this2.$state.go('adminPanel.professors');
	        }, function (error) {
	          console.log(error);
	        });
	      }
	    }
	  }]);

	  return ProfessorDetailsController;
	})();

	exports.ProfessorDetailsController = ProfessorDetailsController;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();
	var professors = {};

	var ClubDetailsController = (function () {
	  ClubDetailsController.$inject = ["$stateParams", "ClubsService", "$state", "$window", "ProfessorsService"];
	  function ClubDetailsController($stateParams, ClubsService, $state, $window, ProfessorsService) {
	    'ngInject';

	    _classCallCheck(this, ClubDetailsController);

	    this.$stateParams = $stateParams;
	    this.$window = $window;
	    SERVICE.set(this, ClubsService.resource);
	    SERVICE.set(professors, ProfessorsService.resource);
	    this.$state = $state;
	    this.getClub($stateParams.clubId);
	    this.getProfessors();
	  }

	  _createClass(ClubDetailsController, [{
	    key: 'getClub',
	    value: function getClub(clubId) {
	      var _this = this;

	      SERVICE.get(this).get({ clubId: clubId }).$promise.then(function (response) {
	        _this.club = response;
	        console.log(response);
	      }, function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'getProfessors',
	    value: function getProfessors() {
	      var _this2 = this;

	      SERVICE.get(professors).query().$promise.then(function (response) {
	        _this2.professorsArray = response;
	        console.log(response);
	      }, function () {});
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      this.club['wrapper'] = 'club';
	      SERVICE.get(this).update({ clubId: this.club.id }, this.club).$promise.then(function (response) {
	        console.log(response);
	      }, function () {});
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      this.getClub(this.club.id);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var _this3 = this;

	      if (this.$window.confirm('You sure you want to delete this Club?')) {
	        SERVICE.get(this)['delete']({ clubId: this.club.id }).$promise.then(function () {
	          _this3.$state.go('adminPanel.clubs');
	        }, function (error) {
	          console.log(error);
	        });
	      }
	    }
	  }]);

	  return ClubDetailsController;
	})();

	exports.ClubDetailsController = ClubDetailsController;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var Q = new WeakMap();
	var HTTP = new WeakMap();
	var USERINFO = new WeakMap();

	var AuthService = (function () {
	  AuthService.$inject = ["$http", "$window", "$q", "api", "$rootScope"];
	  function AuthService($http, $window, $q, api, $rootScope) {
	    'ngInject';

	    _classCallCheck(this, AuthService);

	    this.$window = $window;
	    this.$http = $http;
	    this.api = api;
	    this.userInfo = {};
	    USERINFO.set(this, this.userInfo);

	    this.$q = $q;
	    Q.set(this, $q);
	    HTTP.set(this, $http);
	    this.$rootScope = $rootScope;
	  }

	  //LOG IN

	  _createClass(AuthService, [{
	    key: 'login',
	    value: function login(user) {
	      var _this = this;

	      var deferred = Q.get(this).defer();

	      HTTP.get(this).post(this.api + "v1/admins_sessions", user).then(function (response) {

	        if (response.status == 200) {
	          console.log(response);

	          _this.userInfo = { //generate an access token on the server for the user
	            accessToken: response.data.extract.auth_token,
	            userRole: response.data.extract.role
	          };

	          _this.$rootScope.$emit('user:loggedin', _this.userInfo); //broadcast to all controllers that  the user has logged in
	          _this.$window.sessionStorage["userInfo"] = JSON.stringify(_this.userInfo); //store the data on the client
	          deferred.resolve();
	        } else {
	          deferred.reject(response);
	        }
	      });

	      return deferred.promise;
	    }
	  }, {
	    key: 'logout',

	    //LOG OUT todo: handle error cases
	    value: function logout() {

	      // Removing all permissions
	      var temp = JSON.parse(this.$window.sessionStorage["userInfo"]);
	      temp.userRole = "";
	      this.$window.sessionStorage["userInfo"] = JSON.stringify(temp);
	      this.$rootScope.$emit('user:loggedout'); //broadcast to all controllers that  the user has logged out
	    }

	    ////REGISTER
	    //  register(user) { //todo modify when api is ready
	    //  var deferred = Q.defer();
	    //  this.$http.post( this.api +"/account/register", {"First_Name": user.first_name, "Last_Name": user.last_name, "Email": user.email , "Password": user.password , "ConfirmPassword": user.confirmPassword })
	    //    .then(
	    //      function() {
	    //        deferred.resolve();
	    //      },
	    //      function(error){
	    //        deferred.reject(error.data.ModelState[0]);
	    //      });
	    //
	    //  return deferred.promise;
	    //};

	    //currentUser
	  }, {
	    key: 'currentUser',
	    value: function currentUser() {
	      if (this.$window.sessionStorage["userInfo"] != null) {
	        return JSON.parse(this.$window.sessionStorage["userInfo"]);
	      } else {
	        return null;
	      }
	    }
	  }]);

	  return AuthService;
	})();

	exports.AuthService = AuthService;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TeamMemberService = function TeamMemberService($resource, api, TransformRequestService) {
	  'ngInject';

	  _classCallCheck(this, TeamMemberService);

	  this.resource = $resource(api + "v1/team_members/:teamMemberId", { teamMemberId: '@teamMemberId' }, {
	    get: {
	      method: 'GET'
	    },
	    query: {
	      method: 'GET',
	      isArray: true
	    },
	    'delete': {
	      method: 'DELETE'
	    },
	    add: {
	      method: 'POST',
	      transformRequest: TransformRequestService.transform,
	      headers: {
	        'Content-Type': undefined
	      }
	    },
	    update: {
	      method: 'PUT',
	      transformRequest: TransformRequestService.transform,
	      headers: {
	        'Content-Type': undefined
	      }
	    }
	  });
	};
	TeamMemberService.$inject = ["$resource", "api", "TransformRequestService"];

	exports.TeamMemberService = TeamMemberService;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var ProfessorsService = function ProfessorsService($resource, api, TransformRequestService) {
	  'ngInject';

	  _classCallCheck(this, ProfessorsService);

	  this.resource = $resource(api + 'v1/professors/:professorId', { professorId: '@professorId' }, {
	    get: {
	      method: 'GET'
	    },
	    query: {
	      method: 'GET',
	      isArray: true
	    },
	    'delete': {
	      method: 'DELETE'
	    },
	    add: {
	      method: 'POST',
	      transformRequest: TransformRequestService.transform,
	      headers: {
	        'Content-Type': undefined
	      }
	    },
	    update: {
	      method: 'PUT',
	      transformRequest: TransformRequestService.transform,
	      headers: {
	        'Content-Type': undefined
	      }
	    }
	  });
	};
	ProfessorsService.$inject = ["$resource", "api", "TransformRequestService"];

	exports.ProfessorsService = ProfessorsService;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var InternshipsService = function InternshipsService($resource, api, TransformRequestService) {
	  'ngInject';

	  _classCallCheck(this, InternshipsService);

	  this.resource = $resource(api + 'v1/internships/:internshipId', { internshipId: '@internshipId' }, {
	    get: {
	      method: 'GET'
	    },
	    query: {
	      method: 'GET',
	      isArray: true
	    },
	    'delete': {
	      method: 'DELETE'
	    },
	    add: {
	      method: 'POST',
	      transformRequest: TransformRequestService.transform,
	      headers: {
	        'Content-Type': undefined
	      }
	    },
	    update: {
	      method: 'PUT'
	    }
	  });
	};
	InternshipsService.$inject = ["$resource", "api", "TransformRequestService"];

	exports.InternshipsService = InternshipsService;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var ClubsService = function ClubsService($resource, api, TransformRequestService) {
	  'ngInject';

	  _classCallCheck(this, ClubsService);

	  this.resource = $resource(api + 'v1/clubs/:clubId', { clubId: '@clubId' }, {
	    get: {
	      method: 'GET'
	    },
	    query: {
	      method: 'GET',
	      isArray: true
	    },
	    'delete': {
	      method: 'DELETE'
	    },
	    add: {
	      method: 'POST',
	      transformRequest: TransformRequestService.transform,
	      headers: {
	        'Content-Type': undefined
	      }

	    },
	    update: {
	      method: 'PUT'
	    }
	  });
	};
	ClubsService.$inject = ["$resource", "api", "TransformRequestService"];

	exports.ClubsService = ClubsService;

/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Created by AcerPC on 5/6/2016.
	 */
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TransformRequestService = (function () {
	  function TransformRequestService() {
	    _classCallCheck(this, TransformRequestService);
	  }

	  _createClass(TransformRequestService, [{
	    key: "transform",
	    value: function transform(data) {
	      var fd = new FormData();
	      angular.forEach(data, function (value, key) {
	        key = data.wrapper + "[" + key + "]";
	        fd.append(key, value);
	      });

	      return fd;
	    }
	  }]);

	  return TransformRequestService;
	})();

	exports.TransformRequestService = TransformRequestService;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Q = new WeakMap();
	var WINDOW = new WeakMap();

	var STATE = new WeakMap();
	var edor = {};

	var AuthInterceptor = (function () {
	  AuthInterceptor.$inject = ["$q", "$window"];
	  function AuthInterceptor($q, $window) {

	    'ngInject';

	    _classCallCheck(this, AuthInterceptor);

	    this.$q = $q;
	    this.$window = $window;

	    Q.set(edor, $q);
	    WINDOW.set(edor, $window);

	    //STATE.set(edor, $state);
	  }

	  _createClass(AuthInterceptor, [{
	    key: "request",
	    value: function request(config) {
	      config.headers = config.headers || {};
	      if (WINDOW.get(edor).sessionStorage["userInfo"] === undefined) {} else {
	        config.headers.Authorization = JSON.parse(WINDOW.get(edor).sessionStorage["userInfo"]).accessToken;
	      }
	      return config;
	    }
	  }, {
	    key: "response",
	    value: function response(_response) {
	      return _response || Q.get(edor).when(_response);
	    }
	  }, {
	    key: "responseError",
	    value: function responseError(rejection) {
	      return Q.get(edor).reject(rejection);
	    }

	    //static httpAuthFactory($q, $injector) {
	    //  return new AuthInterceptor($q, $injector);
	    //}

	  }]);

	  return AuthInterceptor;
	})();

	exports.AuthInterceptor = AuthInterceptor;

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.NavbarDirective = NavbarDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function NavbarDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/adminPanel/directives/navbar/navbar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: NavbarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var NavbarController = (function () {
	  NavbarController.$inject = ["$window", "AuthService"];
	  function NavbarController($window, AuthService) {
	    'ngInject';

	    _classCallCheck(this, NavbarController);

	    this.$window = $window;
	    this.AuthService = AuthService;
	  }

	  _createClass(NavbarController, [{
	    key: 'logout',
	    value: function logout() {

	      this.AuthService.logout();
	    }
	  }]);

	  return NavbarController;
	})();

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.MenuButtonDirective = MenuButtonDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function MenuButtonDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/adminPanel/directives/menuButton/menuButton.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: MenuButtonController,
	    controllerAs: 'vm',
	    bindToController: true
	  };

	  return directive;
	}

	var MenuButtonController = (function () {
	  function MenuButtonController() {
	    'ngInject';

	    // "this.creation" is available by directive option "bindToController: true"

	    _classCallCheck(this, MenuButtonController);
	  }

	  _createClass(MenuButtonController, [{
	    key: 'toggleSideNavbar',
	    value: function toggleSideNavbar() {
	      $("#menu-toggle").click(function (e) {
	        e.preventDefault();
	        $("#wrapper").toggleClass("toggled");
	      });
	    }
	  }]);

	  return MenuButtonController;
	})();

/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * Created by test most on 5/4/2016.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.InternshipDirective = InternshipDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();

	function InternshipDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/adminPanel/components/internships/internship.html',
	    scope: {
	      model: '='
	    },
	    controller: InternshipController,
	    controllerAs: 'int',
	    bindToController: true
	  };

	  return directive;
	}

	var InternshipController = (function () {
	  InternshipController.$inject = ["$window", "InternshipsService", "$rootScope"];
	  function InternshipController($window, InternshipsService, $rootScope) {
	    'ngInject';

	    _classCallCheck(this, InternshipController);

	    SERVICE.set(this, InternshipsService.resource);
	    this.$window = $window;
	    this.$rootScope = $rootScope;
	  }

	  _createClass(InternshipController, [{
	    key: 'delete',
	    value: function _delete() {
	      var _this = this;

	      if (this.$window.confirm('You sure you want to delete this internship?')) {
	        SERVICE.get(this)['delete']({ internshipId: this.model.id }).$promise.then(function () {
	          _this.$rootScope.$broadcast("internshipDeleted");
	        }, function (error) {
	          console.log(error.statusText);
	        });
	      }
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      //todo: discuss if there is a better way to do the Cancel
	      this.$rootScope.$broadcast('cancelInternshipEditing');
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      this.model['wrapper'] = 'internship';
	      SERVICE.get(this).update({ internshipId: this.model.id }, this.model).$promise.then(function (response) {
	        console.log(response);
	      }, function (error) {
	        console.log(error.statusText);
	      });
	    }
	  }]);

	  return InternshipController;
	})();

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Created by test most on 5/4/2016.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	exports.TeamMemberDirective = TeamMemberDirective;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var SERVICE = new WeakMap();

	function TeamMemberDirective() {
	  'ngInject';

	  var directive = {
	    restrict: 'E',
	    templateUrl: 'app/adminPanel/components/team_members/team_member.html',
	    scope: {
	      model: '='
	    },
	    controller: TeamMemberController,
	    controllerAs: 'tmc',
	    bindToController: true
	  };

	  return directive;
	}

	var TeamMemberController = (function () {
	  TeamMemberController.$inject = ["$window", "TeamMemberService", "$rootScope"];
	  function TeamMemberController($window, TeamMemberService, $rootScope) {
	    'ngInject';

	    _classCallCheck(this, TeamMemberController);

	    SERVICE.set(this, TeamMemberService.resource);
	    this.$window = $window;
	    this.$rootScope = $rootScope;
	  }

	  _createClass(TeamMemberController, [{
	    key: 'deleteMember',
	    value: function deleteMember() {
	      var _this = this;

	      if (this.$window.confirm('You sure you want to delete this Team Member?')) {
	        SERVICE.get(this)['delete']({ teamMemberId: this.model.id }).$promise.then(function () {
	          _this.$rootScope.$broadcast("memberDeleted");
	        }, function (error) {
	          console.log(error.statusText);
	        });
	      }
	    }
	  }, {
	    key: 'cancelEditing',
	    value: function cancelEditing() {
	      //todo: discuss if there is a better way to do the Cancel
	      this.$rootScope.$broadcast('cancelEditing');
	    }
	  }, {
	    key: 'saveEditing',
	    value: function saveEditing() {
	      this.model['wrapper'] = 'team_member';
	      SERVICE.get(this).update({ teamMemberId: this.model.id }, this.model).$promise.then(function (response) {
	        console.log(response);
	      }, function (error) {
	        console.log(error.statusText);
	      });
	    }
	  }]);

	  return TeamMemberController;
	})();

/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Created by test most on 5/4/2016.
	 */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var frontEndModule = 'frontEnd';
	angular.module(frontEndModule, ['ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap']).constant('api', "http://sgaubg.herokuapp.com/api/");

	exports['default'] = frontEndModule;
	module.exports = exports['default'];

/***/ }
/******/ ]);