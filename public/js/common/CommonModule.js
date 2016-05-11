'use strict';

define( function ( require ) {
    var BaseService             = require( 'common/BaseService' );
    var CkanService             = require( 'common/CkanService' );
    var FileUploaderDirective   = require( 'common/FileUploaderDirective' );
    var NoSpaceFilter           = require( 'common/NoSpaceFilter' );

    var CommonModule            = angular.module( 'CommonModule', []);

    CommonModule.directive( 'fileUploader', [ '$rootScope', 'events', 'SessionsService', FileUploaderDirective ] );

    CommonModule.factory( 'BaseService', [ '$rootScope', '$resource', 'events', BaseService ] );

    CommonModule.factory( 'CkanService', [ '$rootScope', '$resource', 'events', CkanService ]);

    CommonModule.filter( 'noSpace', [ NoSpaceFilter ] );
});