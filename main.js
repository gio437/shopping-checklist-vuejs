const app = Vue.createApp({
    data() {
        return {
            // array names can be changed based on guidelines on specificity
            // default values can be added in arrays/integers
            generalContentList: ['Meijer', 'Publix', 'Kroger', 'Aldi', 'Whole Foods', 'Walmart', 'Target', 'Costco', "Sam's Club", "Trader Joe's"],
            groceryList: [],
            moreItems: [],
            thirdListCount: 0,
        }
    },
    methods: {
            // second (grocery) list functions
            submitNewItems() {
                let groceryTextValue = document.getElementById('groceryTextBox').value;
                groceryTextValue != "" ? this.groceryList.push(groceryTextValue) : false; // prevents a blank submission
                this.$refs["input"].value = ""; // deletes inputted item in text box after submission
                this.secondListCount += 1;
            },
            deleteNewlyDefinedItems(index) {
                const groceryItem = document.getElementById(index);
                groceryItem.remove();
            },
            // end of second list functions
            // for third list + and - functions
            addItems(item) {
                this.thirdListCount += 1;
                this.moreItems.push(item);
            },
            deleteMoreItems() {
                this.moreItems.pop();
                this.thirdListCount > 0 ? this.thirdListCount -= 1 : false;
            }
            // end of third list functions
    }
})
