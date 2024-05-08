// © 2024 - BestDeveloper - BestMat, Inc. - All rights reserved.
var platform = process.platform;

/**
 * BestDeveloper: Class @class {SystemUncomatible} @extends Error
 * This class returns a system uncompatible error.
 * TODO: Add few other OS as C]compatible. (Check GitHub)
 */

class SystemUncompatible extends Error {
    constructor() {
        super(`BestDeveloper Error: Your system i.e. ${platform} is not compatible for BestApp to run on.`);
    }
}

module.exports = { SystemUncompatible };
