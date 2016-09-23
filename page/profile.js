let idCounter = 2;
Page({
    data: {
        newMessageText: "",
        messages: [
            {
                id: 1,
                message: 'TypeScript 用起来的确不错',
                createdAt: "2016/09/21",
                stars: 2,
                isLiked: false,
            },

            {
                id: 2,
                message: 'main = putStrLn "hello world"',
                createdAt: "2016/09/21",
                stars: 4,
                isLiked: true,
            },
        ],
    },

    bindchange(e) {
        const newMessageText = e.detail.value;

        const { messages } = this.data;

        const now = new Date();
        idCounter++;

        messages.unshift({
            id: idCounter,
            message: newMessageText,
            stars: 0,
            isLiked: false,
            createdAt: `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`,
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

    toggleStar(e) {
        const id = parseInt(e.target.dataset.id);

        let messages = this.data.messages;
        const message = this.data.messages.find(message => Object.is(id, message.id));

        // FIXME: use immutable structure
        message.isLiked = !message.isLiked;
        if (message.isLiked) {
            message.stars += 1;
        } else {
            message.stars -= 1;
        }

        // trigger update...
        this.setData({messages});
    },


});