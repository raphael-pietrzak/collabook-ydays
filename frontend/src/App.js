import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


// Import des composants de chaque page
const Home = () => <h1>Accueil</h1>;
const Login = () => <h1>Connexion</h1>;
const Register = () => <h1>Inscription</h1>;
const About = () => <h1>À propos</h1>;
const Legal = () => <h1>Mentions légales</h1>;
const Help = () => <h1>Aide</h1>;
const Premium = () => <h1>Compte Premium</h1>;
const PremiumResources = () => <h1>Ressources Premium</h1>;
const Dashboard = () => <h1>Tableau de bord</h1>;
const NotFound = () => <h1>404 - Page non trouvée</h1>;
const Profile = () => <h1>Profil</h1>;
const EditProfile = () => <h1>Modifier le profil</h1>;
const Friends = () => <h1>Amis</h1>;
const InviteFriends = () => <h1>Inviter des amis</h1>;
const MyCreations = () => <h1>Mes créations</h1>;
const Notifications = () => <h1>Notifications</h1>;
const NewStory = () => <h1>Nouvelle histoire</h1>;
const WriteStory = () => <h1>Écrire une histoire</h1>;
const ViewStory = () => <h1>Voir une histoire</h1>;
const EditStory = () => <h1>Modifier une histoire</h1>;
const StoryComments = () => <h1>Commentaires de l'histoire</h1>;
const StoryContributions = () => <h1>Contributions à l'histoire</h1>;
const StoryHistory = () => <h1>Historique de l'histoire</h1>;
const StoryNotes = () => <h1>Notes de l'histoire</h1>;
const StoriesList = () => <h1>Liste des histoires</h1>;
const JoinStory = () => <h1>Rejoindre une histoire</h1>;
const StoryCharacters = () => <h1>Personnages de l'histoire</h1>;

const ViewChallenge = () => <h1>Voir un défi</h1>;
const ChallengesList = () => <h1>Liste des défis</h1>;
const JoinChallenge = () => <h1>Rejoindre un défi</h1>;

const StoryChat = () => <h1>Chat de l'histoire</h1>;
const StoryCall = () => <h1>Appel de l'histoire</h1>;

const CharacterSheet = () => <h1>Fiche de personnage</h1>;



// Exemple de fonction pour simuler l'authentification de l'utilisateur
const isAuthenticated = () => {
  // Remplace cette logique avec la vraie vérification d'authentification
  return localStorage.getItem('authToken') !== null;
};

// Composant wrapper pour les routes privées
const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/help" element={<Help />} />

        {/* Pages utilisateurs authentifiés */}
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/profile/edit" element={<PrivateRoute element={<EditProfile />} />} />
        <Route path="/friends" element={<PrivateRoute element={<Friends />} />} />
        <Route path="/friends/invite" element={<PrivateRoute element={<InviteFriends />} />} />
        <Route path="/my-creations" element={<PrivateRoute element={<MyCreations />} />} />
        <Route path="/notifications" element={<PrivateRoute element={<Notifications />} />} />

        {/* Pages de gestion des histoires */}
        <Route path="/stories/new" element={<PrivateRoute element={<NewStory />} />} />
        <Route path="/stories/:id/write" element={<PrivateRoute element={<WriteStory />} />} />
        <Route path="/stories/:id" element={<PrivateRoute element={<ViewStory />} />} />
        <Route path="/stories/:id/edit" element={<PrivateRoute element={<EditStory />} />} />
        <Route path="/stories/:id/comments" element={<PrivateRoute element={<StoryComments />} />} />
        <Route path="/stories/:id/contributions" element={<PrivateRoute element={<StoryContributions />} />} />
        <Route path="/stories/:id/history" element={<PrivateRoute element={<StoryHistory />} />} />
        <Route path="/stories/:id/notes" element={<PrivateRoute element={<StoryNotes />} />} />
        <Route path="/stories" element={<PrivateRoute element={<StoriesList />} />} />
        <Route path="/stories/:id/join" element={<PrivateRoute element={<JoinStory />} />} />

        {/* Pages pour les défis / challenges */}
        <Route path="/challenges" element={<PrivateRoute element={<ChallengesList />} />} />
        <Route path="/challenges/:id" element={<PrivateRoute element={<ViewChallenge />} />} />
        <Route path="/challenges/:id/join" element={<PrivateRoute element={<JoinChallenge />} />} />

        {/* Pages de gestion de l’écriture collaborative */}
        <Route path="/stories/:id/characters" element={<PrivateRoute element={<StoryCharacters />} />} />
        <Route path="/stories/:id/characters/:characterId" element={<PrivateRoute element={<CharacterSheet />} />} />
        <Route path="/stories/:id/chat" element={<PrivateRoute element={<StoryChat />} />} />
        <Route path="/stories/:id/call" element={<PrivateRoute element={<StoryCall />} />} />

        {/* Pages liées au compte premium */}
        <Route path="/premium" element={<PrivateRoute element={<Premium />} />} />
        <Route path="/premium/resources" element={<PrivateRoute element={<PremiumResources />} />} />

        {/* Page d'erreur 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;