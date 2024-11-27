const Weight = [ 2, 2, 2, 2, 2]
const Answer = ['a', 'b',  'a', 'c', 'd']


class Exams{
    constructor(answer =  Answer, weight =  Weight){
        this.answer = answer
        this.weight = weight
        this.exams = []
        this.notes = []
    }
    add(exams){
        this.exams.push(exams);
    }
    analizeNotes(){
        let sum = 0
        this.count = 0
        
        this.exams.forEach(element => {
            element.forEach((value, i)=> {
                if (value ===this.answer[i]){
                    sum += this.weight[i]
                }
            });
            this.notes.push(sum)
            sum = 0
            this.count += 1
        });

        return this.notes
    }
    avg(){
        this.analizeNotes()
        this.avg = this.notes.reduce((acc, elem) => acc + elem, 0) / this.count
        this.notes = []
        return this.avg
    }
    min(count){
        this.MinNotes = this.analizeNotes()
        this.MinNotes.sort(function(a,b){
            return a - b;
        });
        this.notes = []
        return this.MinNotes.slice(0,count)

        
    }
    max(count){
        this.Maxnotes = this.analizeNotes()
        this.Maxnotes.sort(function(a,b){
            return a - b;
        })
        this.Maxnotes.reverse()
        this.notes = []
        return this.Maxnotes.slice(0, count)
    }
    lt(value){
        this.values = this.analizeNotes()
        const elements = []
        this.values.forEach(element =>{
            if (element < value){
                elements.push(element)
            }
        })
        this.notes = []
        return elements
    }
    gt(value){
        this.values = this.analizeNotes()
        const elements = []
        this.values.forEach(element =>{
            if (element > value){
                elements.push(element)
            }
        })
        this.notes = []
        return elements

    }

}

exam = new Exams(['a', 'b',  'a', 'c', 'd'], [ 2, 2, 2, 2, 2])

exam.add(['a', 'b',  'a', 'c', 'd'])
exam.add(['a', 'c',  'd', 'c', 'd'])
exam.add(['d', 'd',  'd', 'd', 'd'])

console.log(exam.avg())
console.log(exam.min(2))
console.log(exam.max(2))
console.log(exam.lt(9))
console.log(exam.gt(9))