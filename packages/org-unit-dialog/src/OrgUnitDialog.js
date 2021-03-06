import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import i18n from '@dhis2/d2-i18n';
import PropTypes from 'prop-types';
import OrgUnitSelector from './OrgUnitSelector';

class OrgUnitDialog extends React.PureComponent {
    onUpdateClick = () => {
        this.props.onUpdate();
    };

    render = () => (
        <Dialog
            open={this.props.open}
            onClose={this.props.onClose}
            fullWidth={this.props.fullWidth}
            maxWidth={this.props.maxWidth}
        >
            <DialogTitle>{i18n.t('Organisation units')}</DialogTitle>
            <DialogContent>
                <OrgUnitSelector
                    root={this.props.root}
                    selected={this.props.selected}
                    userOrgUnits={this.props.userOrgUnits}
                    onLevelChange={this.props.onLevelChange}
                    onGroupChange={this.props.onGroupChange}
                    onDeselectAllClick={this.props.onDeselectAllClick}
                    level={this.props.level}
                    group={this.props.group}
                    levelOptions={this.props.levelOptions}
                    groupOptions={this.props.groupOptions}
                    handleOrgUnitClick={this.props.handleOrgUnitClick}
                    handleUserOrgUnitClick={this.props.handleUserOrgUnitClick}
                    checkboxColor={this.props.checkboxColor}
                    handleMultipleOrgUnitsSelect={this.props.handleMultipleOrgUnitsSelect}
                    deselectAllTooltipFontColor={this.props.deselectAllTooltipFontColor}
                    deselectAllTooltipBackgroundColor={this.props.deselectAllTooltipBackgroundColor}
                    displayNameProperty={this.props.displayNameProperty}
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={this.props.onClose}>{i18n.t('Hide')}</Button>
                <Button variant="contained" color="primary" onClick={this.onUpdateClick}>
                    {i18n.t('Update')}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

OrgUnitDialog.defaultProps = {
    displayNameProperty: 'displayName',
    selected: [],
    userOrgUnits: [],
    level: [],
    group: [],
    levelOptions: [],
    groupOptions: [],
    checkboxColor: 'primary',
    deselectAllTooltipFontColorgi: 'white',
    deselectAllTooltipBackgroundColor: 'gray',

    // dialog related props
    open: false,
    fullWidth: true,
    maxWidth: 'md',
};

OrgUnitDialog.propTypes = {
    /**
     * Display name property taken from user settings
     */
    displayNameProperty: PropTypes.string,

    /**
    * Array of objects with required param id
    */
    selected: PropTypes.array,

    /**
    * Array of user organisation units
    * See userOrgUnits.js for static options
    */
    userOrgUnits: PropTypes.array,

    /**
    * Level multiselect array of ids
    */
    level: PropTypes.array,

    /**
    * Group multiselect array of ids
    */
    group: PropTypes.array,

    /**
    * Org unit level options.
    */
    levelOptions: PropTypes.array,

    /**
    * Org unit groups options.
    */
    groupOptions: PropTypes.array,

    /**
    * Setter function for level multiselect value
    */
    onLevelChange: PropTypes.func.isRequired,

    /**
    * Setter for group multiselect value
    */
    onGroupChange: PropTypes.func.isRequired,

    /**
     * On deselect all click handler
     */
    onDeselectAllClick: PropTypes.func.isRequired,

    /**
    * Callback handler for selecting orgunit
    * Arguments supplied in callback: event, orgunit
    */
    handleOrgUnitClick: PropTypes.func.isRequired,

    /**
    * Callback handler for selecting user orgunit
    * Arguments supplied in callback: event, checked
    */
    handleUserOrgUnitClick: PropTypes.func.isRequired,

    /**
     * Callback handler for selecting user orgunit
     * Arguments supplied in callback: event, checked
     */
    handleMultipleOrgUnitsSelect: PropTypes.func.isRequired,

    /**
    * Root organisation unit
    */
    root: PropTypes.object.isRequired,

    /**
     * Checkbox color in org unit tree
     */
    checkboxColor: PropTypes.string,

    /**
     * Font color for text in deselect all tooltip
     */
    deselectAllTooltipFontColor: PropTypes.string,

    /**
     * Font color for background in deselect all tooltip
     */
    deselectAllTooltipBackgroundColor: PropTypes.string,

    // Dialog related props
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    open: PropTypes.bool,
    fullWidth: PropTypes.bool,
    maxWidth: PropTypes.string,
};

export default OrgUnitDialog;
