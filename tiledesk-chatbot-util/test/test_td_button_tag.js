var assert = require('assert');
const { TiledeskChatbotUtil } = require('..');

/********************************
 * NEW BUTTON, tdButton TAG
 ********************************/

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of Quick Reply Button', function() {
        it('should return an intro text with a couple of buttons', function() {
            const text = 'Intro text\n* Button 1\n* Button 2';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply buttons:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.type != null);
            assert.strictEqual(reply.message.attributes.attachment.type, 'template');
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 2);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_TEXT);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Button 1');
            assert.strictEqual(reply.message.attributes.attachment.buttons[1].type, TiledeskChatbotUtil.TYPE_BUTTON_TEXT);
            assert.strictEqual(reply.message.attributes.attachment.buttons[1].value, 'Button 2');
            
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "text",
            //                     "value": "Button 1"
            //                 }, {
            //                     "type": "text",
            //                     "value": "Button 2"
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of Quick Reply ', function() {
        it('should return an intro text with a couple of buttons - 2', function() {
            const text = 'Grazie Giulio, il tuo indirizzo email andrea@gmail.xi è corretto. A breve riceverai un messaggio con tutte le informazioni necessarie per utilizzare il tuo conto corrente. A presto! 🙂\n* Grazie\n* Vorrei parlare con un operatore';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply buttons:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert.strictEqual(reply.message.text, 'Grazie Giulio, il tuo indirizzo email andrea@gmail.xi è corretto. A breve riceverai un messaggio con tutte le informazioni necessarie per utilizzare il tuo conto corrente. A presto! 🙂');
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.type != null);
            assert.strictEqual(reply.message.attributes.attachment.type, 'template');
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 2);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_TEXT);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Grazie');
            assert.strictEqual(reply.message.attributes.attachment.buttons[1].type, TiledeskChatbotUtil.TYPE_BUTTON_TEXT);
            assert.strictEqual(reply.message.attributes.attachment.buttons[1].value, 'Vorrei parlare con un operatore');
            
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "text",
            //                     "value": "Button 1"
            //                 }, {
            //                     "type": "text",
            //                     "value": "Button 2"
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of Quick Reply ', function() {
        it('should return an intro text with four buttons with mixed spaces between the * and the button text', function() {
            const text = 'Intro text\n*   Button 1\n*      Button 2\n*         Button 3\n*      Button 4';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.type != null);
            assert.strictEqual(reply.message.attributes.attachment.type, 'template');
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 4);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_TEXT);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Button 1');
            assert.strictEqual(reply.message.attributes.attachment.buttons[1].type, TiledeskChatbotUtil.TYPE_BUTTON_TEXT);
            assert.strictEqual(reply.message.attributes.attachment.buttons[1].value, 'Button 2');
            assert.strictEqual(reply.message.attributes.attachment.buttons[2].type, TiledeskChatbotUtil.TYPE_BUTTON_TEXT);
            assert.strictEqual(reply.message.attributes.attachment.buttons[2].value, 'Button 3');
            assert.strictEqual(reply.message.attributes.attachment.buttons[3].type, TiledeskChatbotUtil.TYPE_BUTTON_TEXT);
            assert.strictEqual(reply.message.attributes.attachment.buttons[3].value, 'Button 4');
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "text",
            //                     "value": "Button 1"
            //                 }, {
            //                     "type": "text",
            //                     "value": "Button 2"
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});



// *********************************************************
// ****************** TEMPORARY ENABLED *******************
// *********************************************************
describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of no more working old Button', function() {
        it('should NOT return buttons because of:* NO-SPACES button text AS i.e. *BUTTONTEST.', function() {
            const text = 'Intro text\n*Button 1\n*Button 2';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert.strictEqual(reply.message.text, 'Intro text\n*Button 1\n*Button 2');
            assert(reply.message.attributes == null);
            
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "text",
            //                     "value": "Button 1"
            //                 }, {
            //                     "type": "text",
            //                     "value": "Button 2"
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

/********************************
 * BUTTON: tdButton, TYPE LINK
 ********************************/

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of URL Buttons', function() {
        it('should return a link.BLANK button (tdLink default to BLANK)', function() {
            // const cbutil = new TiledeskChatbotUtil();
            const text = 'Intro text\n* Link button http://www.google.com';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 1);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_URL);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Link button');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].link, 'http://www.google.com');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].target, TiledeskChatbotUtil.TARGET_BUTTON_LINK_BLANK);
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "url",
            //                     "value": "Button with text",
            //                     "link": "http://www.google.com",
            //                     "target": "blank"
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of URL Buttons (parent)', function() {
        it('should return a link.PARENT button', function() {
            const text = 'Intro text\n* Button with text link in parent < http://www.google-in-parent.com';
            
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 1);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_URL);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Button with text link in parent');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].link, 'http://www.google-in-parent.com');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].target, TiledeskChatbotUtil.TARGET_BUTTON_LINK_PARENT);
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "url",
            //                     "value": "Button with text",
            //                     "link": "http://www.google.com",
            //                     "target": "parent"
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of URL Buttons (self)', function() {
        it('should return a link.SELF button', function() {
            const text = 'Intro text\n* Button with text link in self > http://www.link-in-self.com';
            
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 1);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_URL);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Button with text link in self');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].link, 'http://www.link-in-self.com');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].target, TiledeskChatbotUtil.TARGET_BUTTON_LINK_SELF);
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "url",
            //                     "value": "Button with text link in self",
            //                     "link": "http://www.link-in-self.com",
            //                     "target": "self"
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of Action Buttons', function() {
        it('should return a Action button with show_echo = false', function() {
            const text = 'Intro text\n* Action Button with text tdAction:ACTION-CALLBACK-NAME';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 1);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_ACTION);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Action Button with text');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].action, 'ACTION-CALLBACK-NAME');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].show_echo, false);
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "action",
            //                     "value": "Action Button with text",
            //                     "action": "ACTION-CALLBACK-NAME",
            //                     "show_echo": false
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of tdAction buttons', function() {
        it('should return a Action button with show_echo = true', function() {
            const text = 'Intro text\n* Action Button with text tdActionShowEcho:ACTION-CALLBACK-NAME';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 1);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_ACTION);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Action Button with text');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].action, 'ACTION-CALLBACK-NAME');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].show_echo, true);
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "action",
            //                     "value": "Action Button with text",
            //                     "action": "ACTION-CALLBACK-NAME",
            //                     "show_echo": true
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of tdIntent buttons', function() {
        it('should return an Intent button (aka Action button with show_echo = true)', function() {
            const text = 'Intro text\n* Action Button with text tdIntent:INTENT-NAME';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 1);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_ACTION);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Action Button with text');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].action, 'INTENT-NAME');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].show_echo, true);
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "action",
            //                     "value": "Action Button with text",
            //                     "action": "ACTION-CALLBACK-NAME",
            //                     "show_echo": true
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});

describe('TiledeskChatbotUtil', function() {
    describe('parseReply() of tdIntentNoEcho buttons', function() {
        it('should return an Intent button (aka Action button with show_echo = false) with no echo text', function() {
            const text = 'Intro text\n* Action Button with text tdIntentNoEcho:INTENT-NAME';
            console.log("parsing text:", text);
            const reply = TiledeskChatbotUtil.parseReply(text);
            console.log("reply:", JSON.stringify(reply));
            assert(reply.message != null);
            assert(reply.message.text != null);
            assert.strictEqual(reply.message.text, 'Intro text');
            assert.strictEqual(reply.message.type, TiledeskChatbotUtil.TYPE_TEXT);
            assert(reply.message.attributes != null);
            assert(reply.message.attributes.attachment != null);
            assert(reply.message.attributes.attachment.buttons != null);
            assert(reply.message.attributes.attachment.buttons.length == 1);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].type, TiledeskChatbotUtil.TYPE_BUTTON_ACTION);
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].value, 'Action Button with text');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].action, 'INTENT-NAME');
            assert.strictEqual(reply.message.attributes.attachment.buttons[0].show_echo, false);
            // MESSAGE:
            // {
            //     "message": {
            //         "text": "Intro text",
            //         "type": "text",
            //         "attributes": {
            //             "attachment": {
            //                 "type": "template",
            //                 "buttons": [{
            //                     "type": "action",
            //                     "value": "Action Button with text",
            //                     "action": "INTENT-NAME",
            //                     "show_echo": false
            //                 }]
            //             }
            //         }
            //     }
            // }
        });
    });
});