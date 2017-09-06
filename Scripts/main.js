function getXhrErrorResponse(xhr) {
    //    alert(xhr.statusText + '    ' + xhr.responseText);
    var status = xhr.statusText;
    var txt = xhr.responseText;
    try {
        txt = jQuery.parseJSON(xhr.responseText).error;
    } catch (exception) {
        // oh well, not JSON
    }
    if (xhr.status === 401) {
        return 'You are not logged in, or your session has expired, please log in again.';
    }
    if (txt) return '<pre>' + txt + '</pre>';
    return '<pre>' + status + '</pre>';
}

function hideGlass() {
    if ($('.popupdialog').length == 0) {
        $('#glass-panel').hide();
    }
}

function showGlass(text) {
    if (typeof text == 'undefined') {
        $('#glass-panel').html('<div class="cont"><div class="msg"></span></div>');
    } else {
        $('#glass-panel').html('<div class="cont"><div class="msg">' + text + '</span></div>');
    }
    $('#glass-panel').show();
}

function setupGlass() {
    if (!$('#glass-panel').length) {
        $('body').append('<div id="glass-panel"></div>');
    }
    hideGlass();
}

function okCancelDialog(parent, width, height, title, body, onOk, onCancel, onValidate, onInitialize, okText, cancelText) {
    var submitButtonText = okText != null ? okText : "OK";
    var cancelButtonText = cancelText != null ? cancelText : "Cancel";
    var txt = '<div class="popupdialog dialog" style="width:' + width + 'px;height:' + height + 'px;margin-left:' + -width / 2 + 'px;margin-top:' + -height / 2 + 'px;">'
        + '<div class="popupdialogheader">' + title + '</div>'
        + '<div class="popupdialogbody">' + body + '</div>'
        + '<div class="popupbuttoncontainer">'
        + '<a class="popupbutton cancelbutton">' + cancelButtonText + '</a>'
        + '<input class="popupbutton" type="button" name="okbutton" value="' + submitButtonText + '">'
        + '</div>'
        + '</div>';
    showGlass();
    var $dialogNode = $(txt);

    $(parent).append($dialogNode);

    if (onInitialize) {
        onInitialize();
    }
    $dialogNode.find('.popupbuttoncontainer input[name=okbutton]').click(function (e) {
        if (onValidate && !onValidate()) {
            return;
        }
        $(this).parents('.popupdialog').hide();
        if (onOk) onOk();
        $(this).parents('.popupdialog').remove();
        hideGlass();
    });
    $dialogNode.find('.cancelbutton').click(closeDialog);
    $dialogNode.find('[name=okbutton]').focus();

    $dialogNode.keydown(function (e) {
        if (e.keyCode == 27) {
            closeDialog();
        }
    });

    function closeDialog() {
        $dialogNode.hide();
        $dialogNode.remove();
        hideGlass();
        if (onCancel) onCancel();
    }
}

function questionDialog(parent, body, onOk, onCancel) {
    okCancelDialog(parent, 500, 350, "Question", body, onOk, onCancel, null, null, "Yes", "No");
}

function showDialog(parent, width, height, title, body) {
    var existingDialogs = $('.popupdialog');
    existingDialogs.hide();

    width = width || 500;
    height = height || 350;

    var $dialog = $('<div>', {
        'class': 'popupdialog dialog',        
        'css': {
            'width': width + 'px',
            'height': height + 'px',
            'margin-left': -width / 2 + 'px',
            'margin-top': -height / 2 + 'px'
        }
    });

    var $header = $('<div>', {
        'class': 'popupdialogheader',
        'text': title
    });

    var $body = $('<div>', {
        'class': 'popupdialogbody',
        'html': body,
        'css': { 'bottom': 0 }
    });

    $dialog.append($header).append($body);    
    $(parent).append($dialog);
    showGlass();

    return {
        close: function() {
            $dialog.remove();
            hideGlass();
            existingDialogs.show();
        }
    };
}

function messageDialog(parent, title, style, body, onClose, w, h) {
    var existingDialogs = $('.popupdialog');
    existingDialogs.hide();

    var width = w ? w : 500;
    var height = h ? h : 350;
    var txt = '<div class="popupdialog dialog" style="width:' + width + 'px;height:' + height + 'px;margin-left:' + -width / 2 + 'px;margin-top:' + -height / 2 + 'px;">'
        + '<div class="popupdialogheader" ' + style + '">' + title + '</div>'
        + '<div class="popupdialogbody">' + body + '</div>'
        + '<div class="popupbuttoncontainer">'
        + '<input class="popupbutton" type="button" name="closebutton" value="Close">'
        + '</div>'
        + '</div>';
    showGlass();
    $(parent).append(txt);
    $('.popupbuttoncontainer input[name=closebutton]').click(function (e) {
        $(this).parents('.popupdialog').hide();
        $(this).parents('.popupdialog').remove();
        hideGlass();
        existingDialogs.show();
        if (onClose) onClose();
    });
    $('.popupbuttoncontainer input[name=closebutton]').focus();
}

function infoDialog(parent, body, onClose) {
    messageDialog(parent, "Information", '', body, onClose);
}

function errorDialog(parent, body, onClose, w, h) {
    messageDialog(parent, "Error", 'style="background-color: #ffb6c1;"', body, onClose, w, h);
}

function setHelpSizePos() {
    var w = $('#main').width();
    var h = $('#main').height();
    var t = $('#main').position().top;
    $('#help').height(h + 30);
    $('#help').css({ top: t + 3 - 10 + 'px' });
    var hw = $('#help').width();
    if (hw > 0) $('#content').width(w - hw - 10);
    else $('#content').width(w);
}

var hasHelp = false;

function isHelpVisible() {
    var cook = $.cookie("tfs4jira.is.help.visible");
    return cook != null && 'yes' === cook;
}

function setHelpVisible(visible) {
    $.cookie("tfs4jira.is.help.visible", visible ? 'yes' : 'no', { path: '/', expires: 30 });
}

function showInfoMessage(text) {
    showMessage('info', text);
}

var isLeavingPage = false;
window.addEventListener("beforeunload", function () {
    isLeavingPage = true;
});

function showErrorMessage(text) {
    // Don't show error if user is leaving page 
    if (isLeavingPage) {
        return;
    }
    
    // Clear previous info message(if any)
    clearMessages();

    // On error hide spinner if present
    hideSpinner();

    errorDialog('body', text, null);       
}

function addMessage(className, text) {
    var div = $('<div>');
    div.addClass(className);
    div.text(text);
    $('#messages').append(div);
}

function showMessage(className, text) {
    clearMessages();
    addMessage(className, text);
}

function clearMessages() {
    $('#messages').html('');
}

function fillHelp(what, title) {
    if (what && $(what).length > 0) {
        $('#helpinner').html($(what).html());
        hasHelp = true;
    } else {
        hasHelp = false;
    }
    $('#helptitle').html(title);

    if (hasHelp && isHelpVisible()) {
        $('#help').css({ width: 400 });
        $('#help').show();
        $('#helpme').parent().hide();
    } else {
        $('#help').css({ width: 0 });
        $('#help').hide();
        if (hasHelp) $('#helpme').parent().show();
        else $('#helpme').parent().hide();
    }

    setHelpSizePos();
}

function showHelp() {
    if (isHelpVisible()) return;
    
    $('#help').css({ width: 0 });
    $('#help').show();
    $('#help').animate(
            { width: 400 }, 'fast',
            function () {
                $('#help').css({ width: 400, display: 'block' });
                setHelpVisible(true);
                setHelpSizePos();
                $('#helpme').parent().hide();
            }
        );
}

function hideHelp() {
    if (!isHelpVisible()) return;

    $('#help').animate(
            { width: 0 }, 'fast',
            function () {
                $('#help').css({ width: 0, display: 'none' });
                setHelpVisible(false);
                setHelpSizePos();
                $('#helpme').parent().show();
            }
        );
}

function showSpinner() {
    $(document.body).addClass("loading");
}

function hideSpinner() {
    $(document.body).removeClass("loading");
}

function showOneTimeTooltip($element, content) {
    $element.tooltipster({
        position: 'bottom',
        content: content,
        contentAsHTML: true,
        theme: 'tfs4jira-tooltip-theme',
        interactive: true,
        hideOnClick: 'true',
        functionAfter: disableTooltip
    });

    $element.tooltipster('show');

    function disableTooltip() {
        $element.tooltipster('hide');
        $element.tooltipster('disable');
        return false;
    }
}

function getValueFromMappings(mappings, id, type) {
    for (var i = 0; i < mappings.length; i++) {
        if (mappings[i].id == id) {
            return mappings[i][type];
        }
    }
}

function getMergedMappings(mappings) {
    var mergedMappings = [];

    for (var i = 0; i < mappings.length; i++) {
        var mappingFound = false;

        mappings[i].jira = mappings[i].jira || mappings[i].jiraId;
        mappings[i].tfs = mappings[i].tfs || mappings[i].tfsId;
        mappings[i].id = mappings[i].id || mappings[i].mappingId;

        for (var k = 0; k < mergedMappings.length; k++) {
            mergedMappings[k].jira.forEach(function (item) {
                if (item.value == mappings[i].jira) {
                    mergedMappings[k].jira[0].isDefault = false;
                    mergedMappings[k].tfs.push({ value: mappings[i].tfs, id: mappings[i].id, isDefault: mappings[i].isDefault });
                    mergedMappings[k].id.push(mappings[i].id);
                    mappingFound = true;
                }
            });

            if (mappingFound === false) {
                mergedMappings[k].tfs.forEach(function (item) {
                    if (item.value == mappings[i].tfs) {
                        mergedMappings[k].tfs[0].isDefault = false;
                        mergedMappings[k].jira.push({ value: mappings[i].jira, id: mappings[i].id, isDefault: mappings[i].isDefault });
                        mergedMappings[k].id.push(mappings[i].id);
                        mappingFound = true;
                    }
                });
            }
        }

        if (!mappingFound) {
            mergedMappings.push({
                id: [mappings[i].id],
                jira: [{ value: mappings[i].jira, id: mappings[i].id, isDefault: mappings[i].isDefault }],
                tfs: [{ value: mappings[i].tfs, id: mappings[i].id, isDefault: mappings[i].isDefault }],
                direction: mappings[i].direction
            });
        }
    }

    return mergedMappings;
}

$(document).ready(function () {
    setupGlass();

    $(window).resize(setHelpSizePos);
    setHelpSizePos();
    setHelpVisible(isHelpVisible());

    $('#closehelp').click(function (e) {
        e.preventDefault();
        hideHelp();
    });

    $('#helpme').click(function (e) {
        e.preventDefault();
        showHelp();
    });
    fillHelp(null);    
});