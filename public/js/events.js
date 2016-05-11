'use strict';

define( function () {
    var events  = angular.module( 'events', []);

    events.constant( 'events', {
        CATEGORIES_CREATED      : 'categories.created',
        CATEGORIES_DELETED      : 'categories.deleted',
        CATEGORIES_ERROR        : 'categories.error',
        CATEGORIES_QUERIED      : 'categories.queried',
        CATEGORIES_RETRIEVED    : 'categories.retrieved',
        CATEGORIES_UPDATED      : 'categories.updated',
        DATASETS_ERROR          : 'datasets.error',
        DATASETS_QUERY          : 'datasets.query',
        DATASETS_QUERYING       : 'datasets.querying',
        FILEUPLOADER_DONE       : 'fileuploader.done',
        FILEUPLOADER_ERROR      : 'fileuploader.error',
        FILEUPLOADER_UPLOADING  : 'fileuploader.uploading',
        LOGIN_ERROR             : 'login.error',
        LOGIN_SUCCESS           : 'login.success',
        LOGOUT_ERROR            : 'logout.error',
        LOGOUT_SUCCESS          : 'logout.success',
        POSTS_CREATED           : 'posts.created',
        POSTS_DELETED           : 'posts.deleted',
        POSTS_ERROR             : 'posts.error',
        POSTS_QUERIED           : 'posts.queried',
        POSTS_RETRIEVED         : 'posts.retrieved',
        POSTS_UPDATED           : 'posts.updated',
        SYSTEM_MESSAGE          : 'system.message',
        USERS_CREATED           : 'users.created',
        USERS_DELETED           : 'users.deleted',
        USERS_ERROR             : 'users.error',
        USERS_QUERIED           : 'users.queried',
        USERS_RETRIEVED         : 'users.retrieved',
        USERS_UPDATED           : 'users.updated'
    });
});