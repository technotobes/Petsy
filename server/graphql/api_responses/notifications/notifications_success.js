﻿module.exports.notificationsFoundSuccess = (userId, notifications) => {
    return {
        success: true,
        message: `notifications found for id ${userId}`,
        notifications:notifications
    }
};

module.exports.notificationAddedSuccess = (notification) => {
    return {
        success: true,
        message: `notification added for id ${notification.userId}`,
        notification:notification
    }
};

module.exports.notificationDeletedSuccess = (id) => {
    return {
        success: true,
        message: `notification ${id} deleted`,
        notification:null
    }
};