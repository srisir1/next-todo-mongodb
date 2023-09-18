
export let state = {
    PatientStatus: [],
    PatientTreatment: []
}

export function SetDataToSession() { sessionStorage.setItem('state', JSON.stringify(state)); }
export function GetSessionData() { return JSON.parse(sessionStorage.getItem('state')); }

export function AddP_Status(x) {
    state.PatientStatus.push(x);
    SetDataToSession();
}
export function AddP_Treatment(x) {
    state.PatientTreatment.push(x);
    SetDataToSession();
}
export function UpdateData(y) {
    state.PatientStatus = y.status;
    state.PatientTreatment = y.treatment;
    SetDataToSession();
}