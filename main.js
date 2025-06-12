

// using divide and conquer
class Max {

    nums = [1, 2, 3, 40, 56, 32, 50, 3, 32, 32, 2]

    FindMax() {
        const mx = Math.max(... this.nums)
        return mx
    }
    Combine(list) {
        const combine = []
        for (const oo of list) {
            if (oo.length == 1) {
                combine.push(oo[0])
                continue
            }
            if (oo.length != 2) continue
            const get_m = this.GetMax(...oo)
            combine.push(get_m)

        }
        return combine
    }
    GroupTwos(inputs) {
        let gcount = 0, temp = [], data = []
        for (let i = 0; i < inputs.length; i++) {
            gcount++
            temp.push(inputs[i])

            if (gcount == 2) {
                data.push(temp)
                gcount = 0
                temp = []
            }
        }
        return data
    }
    DivideAndConquer() {
        let combine = []
        let start_inps = this.nums
        // console.log('\x1b[41m%s\x1b[0m', 'start_inps', start_inps.length)
        let cc = 0
        while (start_inps.length != 1) {
            cc++
            const data = this.GroupTwos(start_inps)
            console.log('\x1b[41m%s\x1b[0m', 'data', data)
            combine = this.Combine(data)
            start_inps = combine
        }
        return start_inps[0] // max
    }

    GetMax(x, y) {
        if (x > y) {
            return x
        } else if (y > x) {
            return y
        } else {
            return y // equal
        }
    }

}
//
(
    async () => {

        const max1 = new Max()

        // const test = max.GetMax(5, 10)
        // const test = max1.FindMax()
        const test = max1.DivideAndConquer()

        console.log('\x1b[41m%s\x1b[0m', '# result', test)



    }



)()
