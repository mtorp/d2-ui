import { combineReducers } from 'redux';
import visualization, * as fromVisualization from './visualization';
import current, * as fromCurrent from './current';
import dimensions, * as fromDimensions from './dimensions';
import recommendedIds, * as fromRecommendedIds from './recommendedIds';
import ui, * as fromUi from './ui';
import metadata, * as fromMetadata from './metadata';
import settings, * as fromSettings from './settings';
import user, * as fromUser from './user';
import snackbar, * as fromSnackbar from './snackbar';
import loadError, * as fromLoadError from './loadError';

// Action types

export const actionTypes = {
    ...fromVisualization.actionTypes,
    ...fromCurrent.actionTypes,
    ...fromDimensions.actionTypes,
    ...fromRecommendedIds.actionTypes,
    ...fromUi.actionTypes,
    ...fromMetadata.actionTypes,
    ...fromSettings.actionTypes,
    ...fromUser.actionTypes,
    ...fromSnackbar.actionTypes,
    ...fromLoadError.actionTypes,
};

// Reducers

export default combineReducers({
    visualization,
    current,
    dimensions,
    recommendedIds,
    ui,
    metadata,
    settings,
    user,
    snackbar,
    loadError,
});

// Selectors

export {
    fromVisualization,
    fromCurrent,
    fromDimensions,
    fromRecommendedIds,
    fromUi,
    fromMetadata,
    fromSettings,
    fromUser,
    fromSnackbar,
    fromLoadError,
};
