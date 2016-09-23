Page({
    data: {
        newMessageText: "",
        messages: [
            {
                message: 'TypeSript 用起来的确不错',
                createdAt: new Date("2016/09/21"),
            },

            {
                message: 'main = putStrLn "hello world"',
                createdAt: new Date("2016/09/21"),
            }
        ],
    },

    // doesn't do anything
    // bindKeyInput(e) {
    //     console.log("key input", e);
    // },

    bindchange(e) {
        const newMessageText = e.detail.value;

        const { messages } = this.data;

        messages.unshift({
            message: newMessageText,
            createdAt: new Date(),
        });

        // TODO use immutable
        this.setData({
            newMessageText: "",
            messages,
        });
    },

    bindfocus(e) {
        console.log("input focus");
    },

    bindinput(e) {
        console.log("input", e.detail);
        this.setData({
            newMessageText: e.detail.value
        });
    },

    bindblur(e) {
        console.log("blur");
    },


});