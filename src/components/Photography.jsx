import React, { useState } from 'react';
import photographyData from '../photography.json';

export default function Photography() {
  // State to track which album is open. null means the modal is closed.
  const [activeAlbum, setActiveAlbum] = useState(null);

  // Function to close the modal if they click outside the images
  const closeModal = (e) => {
    if (e.target.id === 'modal-backdrop') {
      setActiveAlbum(null);
    }
  };

  return (
    <div className="space-y-8 relative">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Through the Lens</h2>
        <p className="text-slate-400 mt-1">Documenting local ventures and creative visual goals.</p>
      </div>
      
      {/* The Album Covers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photographyData.map((album) => (
          <div 
            key={album.id} 
            onClick={() => setActiveAlbum(album)}
            className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-video cursor-pointer shadow-lg"
          >
            <img 
              src={album.coverImage} 
              alt={album.title} 
              className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-white font-bold text-xl">{album.title}</p>
              <p className="text-blue-400 text-sm font-medium mt-1">
                {album.images ? album.images.length : 0} Photos &rarr; Click to open
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* The Full-Screen Gallery Modal */}
      {activeAlbum && (
        <div 
          id="modal-backdrop"
          onClick={closeModal}
          className="fixed inset-0 z-[100] bg-[#0f172a]/95 backdrop-blur-2xl flex flex-col items-center p-6 md:p-12 overflow-y-auto"
        >
          {/* Close Button */}
          <button 
            onClick={() => setActiveAlbum(null)}
            className="fixed top-6 right-6 z-[110] bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-md transition-colors border border-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Modal Content */}
          <div className="w-full max-w-4xl space-y-8 animate-in fade-in zoom-in-95 duration-300 relative z-[105] mt-12 md:mt-0">
            <div className="text-center space-y-2 mb-8">
              <h3 className="text-4xl font-bold text-white">{activeAlbum.title}</h3>
              <p className="text-slate-400">{activeAlbum.description}</p>
            </div>

            {/* Scrollable Photos in the Album */}
            <div className="space-y-12">
              {activeAlbum.images && activeAlbum.images.map((imgSrc, index) => (
                <div key={index} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50">
                  <img 
                    src={imgSrc} 
                    alt={`${activeAlbum.title} ${index + 1}`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center pb-24 pt-8">
              <span className="text-slate-500 text-sm font-medium tracking-widest uppercase">End of Album</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}