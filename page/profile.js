Page({
    data: {
        newMessageText: "",
        messages: [
            {
                message: 'TypeScript 用起来的确不错',
                createdAt: "2016/09/21",
                stars: 2,
            },

            {
                message: 'main = putStrLn "hello world"',
                createdAt: "2016/09/21",
                stars: 4,
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

        const now = new Date();
        messages.unshift({
            message: newMessageText,
            createdAt: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`,
        });

        // TODO use immutable
        this.setData({
            newMessageText: "",
            messages,
            stars: 0,
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