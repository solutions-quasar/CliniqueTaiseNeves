// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtqvMBsdcFDp4HQzMshK3qfRjLqOsvnaI",
    authDomain: "clinique-tn.firebaseapp.com",
    projectId: "clinique-tn",
    storageBucket: "clinique-tn.firebasestorage.app",
    messagingSenderId: "271740850680",
    appId: "1:271740850680:web:6b57d736964337f2b0c60d",
    measurementId: "G-0J6CMLY0YX"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();

// UI Elements
const ui = {
    screens: document.querySelectorAll('.screen'),
    loginForm: document.getElementById('login-form'),
    loginError: document.getElementById('login-error'),
    logoutBtn: document.getElementById('logout-btn'),
    leadsList: document.getElementById('leads-list'),
    statTotal: document.getElementById('stat-total'),
    statNew: document.getElementById('stat-new'),
    userDisplay: document.getElementById('user-display'),
    userAvatar: document.getElementById('user-avatar'),
    leadModal: document.getElementById('lead-modal'),
    modalBody: document.getElementById('modal-body'),
    modalClose: document.querySelector('.modal-close'),
    rememberMe: document.getElementById('remember-me'),
    emailInput: document.getElementById('email')
};

// Configuration & State
let unsubscribeLeads = null;

// Init
document.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('erp_remembered_email');
    if (savedEmail && ui.emailInput) {
        ui.emailInput.value = savedEmail;
        if (ui.rememberMe) ui.rememberMe.checked = true;
    }
});

// Auth Observer
auth.onAuthStateChanged(user => {
    if (user) {
        switchScreen('dashboard');
        setupDashboard(user);
    } else {
        switchScreen('login');
        cleanupDashboard();
    }
});

// Navigation
function switchScreen(screenId) {
    ui.screens.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`${screenId}-screen`);
    if (target) target.classList.add('active');
}

// Login Handler
ui.loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = ui.emailInput.value;
    const password = document.getElementById('password').value;
    const btn = ui.loginForm.querySelector('button');
    const checked = ui.rememberMe.checked;

    btn.disabled = true;
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> <span>Patientez...</span>';
    ui.loginError.style.display = 'none';

    try {
        // Set Persistence
        const persistence = checked ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;
        await auth.setPersistence(persistence);

        // Sign In
        await auth.signInWithEmailAndPassword(email, password);

        // Handle Email Storage
        if (checked) {
            localStorage.setItem('erp_remembered_email', email);
        } else {
            localStorage.removeItem('erp_remembered_email');
        }
    } catch (err) {
        console.error("Login error:", err);
        ui.loginError.textContent = "Accès refusé. Vérifiez vos identifiants.";
        ui.loginError.style.display = 'block';
        btn.disabled = false;
        btn.innerHTML = originalContent;
    }
});

// Logout Handler
ui.logoutBtn.addEventListener('click', () => auth.signOut());

// Dashboard Management
function setupDashboard(user) {
    ui.userDisplay.textContent = user.email.split('@')[0];
    ui.userAvatar.textContent = user.email.substring(0, 2).toUpperCase();

    // Real-time leads sync
    unsubscribeLeads = db.collection("leads")
        .orderBy("createdAt", "desc")
        .onSnapshot(snapshot => {
            renderLeads(snapshot);
            updateStats(snapshot);
        }, err => console.error("Snapshot error:", err));
}

function cleanupDashboard() {
    if (unsubscribeLeads) {
        unsubscribeLeads();
        unsubscribeLeads = null;
    }
    ui.leadsList.innerHTML = '';
}

// Data Rendering
function renderLeads(snapshot) {
    ui.leadsList.innerHTML = '';

    snapshot.forEach(doc => {
        const lead = doc.data();
        const date = lead.createdAt ? lead.createdAt.toDate() : new Date();
        const status = lead.status || 'nouveau';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div class="date-cell">
                    <span style="font-weight: 700; display: block;">${date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}</span>
                    <span style="font-size: 0.75rem; color: #888;">${date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </td>
            <td>
                <div class="patient-cell">
                    <span style="font-weight: 600; display: block;">${lead.Nom || '---'}</span>
                    <span style="font-size: 0.8rem; color: #666;">${lead.Contact || 'No contact'}</span>
                </div>
            </td>
            <td><span style="font-weight: 500;">${lead.Service || 'Non spécifié'}</span></td>
            <td>${lead.Moment || '---'}</td>
            <td><span class="status-badge ${status === 'nouveau' ? 'status-new' : 'status-done'}">${status}</span></td>
            <td style="text-align: right;">
                <button class="btn-sm" onclick="openLeadDetails('${doc.id}')">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </td>
        `;
        ui.leadsList.appendChild(tr);
    });
}

function updateStats(snapshot) {
    let total = snapshot.size;
    let fresh = 0;
    snapshot.forEach(doc => {
        if ((doc.data().status || 'nouveau') === 'nouveau') fresh++;
    });

    ui.statTotal.textContent = total;
    ui.statNew.textContent = fresh;
}

// Modal Management
window.openLeadDetails = async (id) => {
    try {
        const doc = await db.collection("leads").doc(id).get();
        if (!doc.exists) return;

        const lead = doc.data();
        const date = lead.createdAt ? lead.createdAt.toDate() : new Date();

        ui.modalBody.innerHTML = `
            <div class="modal-padding">
                <header class="modal-header">
                    <h2>Détails du Lead</h2>
                    <span class="status-badge ${lead.status === 'traité' ? 'status-done' : 'status-new'}">${lead.status || 'nouveau'}</span>
                </header>
                
                <div class="modal-grid">
                    <div class="detail-block">
                        <label>Patient</label>
                        <p>${lead.Nom || '---'}</p>
                    </div>
                    <div class="detail-block">
                        <label>Contact</label>
                        <p>${lead.Contact || '---'}</p>
                    </div>
                    <div class="detail-block">
                        <label>Soin Souhaité</label>
                        <p>${lead.Service || '---'}</p>
                    </div>
                    <div class="detail-block">
                        <label>Date Demande</label>
                        <p>${date.toLocaleString('fr-FR')}</p>
                    </div>
                    <div class="detail-block full">
                        <label>Message</label>
                        <div class="message-box">${lead.Message || 'Aucun message particulier.'}</div>
                    </div>
                </div>
                
                <div class="modal-actions">
                    ${(lead.status || 'nouveau') === 'nouveau' ?
                `<button class="btn-sm btn-primary" onclick="markAsDone('${id}')">Marquer comme traité</button>` :
                `<button class="btn-sm" onclick="markAsNew('${id}')">Réinitialiser en nouveau</button>`
            }
                    <button class="btn-sm" onclick="closeModal()">Fermer</button>
                </div>
            </div>
        `;
        ui.leadModal.style.display = 'block';
    } catch (err) {
        console.error("Error fetching lead:", err);
    }
};

window.markAsDone = async (id) => {
    await db.collection("leads").doc(id).update({ status: 'traité' });
    closeModal();
};

window.markAsNew = async (id) => {
    await db.collection("leads").doc(id).update({ status: 'nouveau' });
    closeModal();
};

window.closeModal = () => {
    ui.leadModal.style.display = 'none';
};

ui.modalClose.onclick = closeModal;
window.onclick = (e) => {
    if (e.target === ui.leadModal) closeModal();
};
