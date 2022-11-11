class Company {
    constructor(companyName, opened, companyCode, employees, ceo, nvo, workingLocation, activityAreas, contacts, subsidiaries) {
        this['company name'] = companyName;
        this.opened = opened;
        this.companyCode = companyCode;
        this.employees = employees;
        this.ceo = ceo;
        this.nvo = nvo;
        this.workingLocation = workingLocation;
        this.activityAreas = activityAreas;
        this.contacts = contacts;
        this.subsidiaries = subsidiaries;
    }
    addActivity(newActivity) {
        return this.activityAreas.push(newActivity)
    }

    // 7.2
    getActivityList() {
        return this.activityAreas.join(', ');
    }

    // 9.2
    removeActivity(remove) {
        let updatedActivityAres = this.activityAreas.filter((location) => {
            return location !== remove
        })
        this.activityAreas = updatedActivityAres;
    }
}

const company1 = new Company(
    'Company1',
    1990,
    1234567,
    55,
    'John Doe',
    false,
    ['Lithuania', 'USA', 'UK', 'France', 'Italy', 'Spain'],
    ['Marketing', 'Trading'],
    {
        phone: 003706123456,
        email: 'mail@mail.com',
        address: {
            country: 'Lithuania',
            city: 'Vinius',
            street: 'Vinius st.',
            apartment: 15,
        }
    },
    [],
)

const subcompany1 = new Company(
    'Subcompany1',
    1990,
    789456321,
    55,
    'Doe Doe',
    false,
    ['Lithuania', 'USA', 'UK', 'France', 'Italy', 'Spain'],
    ['Transport', 'Logistic'],
    {
        phone: '0037061556',
        email: 'mail2@mail2.com',
        address: {
            country: 'Lithuania',
            city: 'Kaunas',
            street: 'Kaunas st.',
            apartment: 13,
        },
    },
    []
)

let subcompany2 = {
    'company name': 'Subcompany2',
    opened: 1990,
    code: 789456321,
    employees: 55,
    ceo: 'Doe Doe',
    nvo: false,
    workingLocation: ['Lithuania', 'USA', 'UK', 'France', 'Italy', 'Spain'],
    activityAreas: ['Transport', 'Logistic'],
    contacts: {
        phone: '0037061556',
        email: 'mail2@mail2.com',
        address: {
            country: 'Lithuania',
            city: 'Kaunas',
            street: 'Kaunas st.',
            apartment: 13,
        },
    },

    subsidaries: [],
    // 8.2

}



// subcompany2.getActivityList();
// subcompany2.addActivity('Tarnsformation');
// subcompany2.addActivity('Cosmosss');
// subcompany2.removeActivity('Logistic')
// subcompany2.removeActivity('Transport')
// console.log(subcompany2.getActivityList());
// console.log(subcompany2.activityAreas);

// console.log(company1.addActivity('labas'));




