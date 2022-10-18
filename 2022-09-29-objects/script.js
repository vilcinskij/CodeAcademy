companyObj = new Object();

companyObj['company name'] = 'Company1';
companyObj.opened = 1990;
companyObj.code = 1234567;
companyObj.employees = 55;
companyObj.ceo = 'John Doe';
companyObj.nvo = false;
companyObj.workingLocation = ['Lithuania', 'USA', 'UK', 'France', 'Italy', 'Spain'];
companyObj.activityAreas = ['Marketing', 'Trading'];
companyObj.contacts = {};
companyObj.contacts.phone = 003706123456;
companyObj.contacts.email = 'mail@mail.com';
companyObj.contacts.address = {};
companyObj.contacts.address.country = 'Lithuania';
companyObj.contacts.address.city = 'Vilnius';
companyObj.contacts.address.street = 'Vilnius st.';
companyObj.contacts.apartment = 15;
companyObj.subsidaries = [];



let subcompany1 = {
    'company name': 'Subcompany1',
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
}

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
    addActivity(newActivity) {
        this.activityAreas.push(newActivity)

    },

    // 7.2
    getActivityList() {
        return this.activityAreas.join(', ');
    },

    // 9.2
    removeActivity(remove) {
        let updatedActivityAres = this.activityAreas.filter((location) => {
            return location !== remove
        }) 
        this.activityAreas = updatedActivityAres;
    }

}



subcompany2.getActivityList();
subcompany2.addActivity('Tarnsformation');
subcompany2.addActivity('Cosmosss');
subcompany2.removeActivity('Logistic')
subcompany2.removeActivity('Transport')
console.log(subcompany2.getActivityList());
console.log(subcompany2.activityAreas);
