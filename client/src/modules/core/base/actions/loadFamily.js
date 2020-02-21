export default 
{
    groups: ['parents', 'children', 'siblings',],
    parents: [
        {role: "Vader", value: "Simon van Egmond",}, 
        {role: "Moeder", value: "Catharina Simons",},
    ],
    children: [
        {role: "Zoon", value: "Huite van Egmond",},
        {role: "Dochter", value: "Catharina Magdalena van Egmond"},
        {role: "Dochter", value: "Jacobus Antonius van Egmond"}
    ],
    siblings: [
        {role: "Broer", value: "Johannes van egmond",}, 
        {role: "Zus", value: "Geertruida van Egmond",},
        {role: "Zus", value: "Geertruida van Egmond",},
        {role: "Zus", value: "Helena van Egmond",},
        {role: "Broer", value: "Antonius van Egmond",},
    ],
};

//WZgNdZypWnjJeY8P
//mongodb+srv://yeeroen:<password>@cluster0-nuhe6.mongodb.net/test?retryWrites=true&w=majority
const events = {
    _: [
        {
            type: 'marriage',
            person: 'Iemand',
            date: '-121214151251512',
            location: 'Amsterdam',
            time: '12:00',
            partner: 'Kaas',
        },
        {
            type: 'death',
            person: 'Iemand',
            date: '-12121415224151',
            location: 'Haarlem',
            time: '14:00'
        },
        {
            type: 'birth',
            person: 'Iemand',
            date: '-131414241221',
            location: 'Amsterdam',
            time: '09:00'
        }
    ]
}