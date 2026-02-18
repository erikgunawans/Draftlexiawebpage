import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { CheckCircle, UploadCloud, User, Briefcase, Building2, Phone, Mail, Loader2, ShieldCheck, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function RegistrationPage() {
  const { t } = useLanguage();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    maxFiles: 1,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data, files);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const benefits = [
    {
      title: t.registration.benefits.zeroRisk.title,
      description: t.registration.benefits.zeroRisk.desc,
      icon: ShieldCheck
    },
    {
      title: t.registration.benefits.knowledgeGraph.title,
      description: t.registration.benefits.knowledgeGraph.desc,
      icon: FileText
    },
    {
      title: t.registration.benefits.whiteGlove.title,
      description: t.registration.benefits.whiteGlove.desc,
      icon: User
    }
  ];

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 px-6 md:px-10 lg:px-20 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-slate-900/60 border border-green-500/30 rounded-2xl p-8 shadow-2xl backdrop-blur-sm text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-500/5" />
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Request Received</h2>
          <p className="text-gray-400 mb-8 relative z-10">
            Your application for the Strategic Pilot Program has been securely transmitted. Our team will review your credentials and contact you within 24 hours.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors relative z-10"
          >
            Return Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 lg:px-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-[#3779f1]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#3779f1]/20 rounded-full blur-[100px]" />
        {/* Grid lines */}
        <div className="absolute inset-0" 
             style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start relative z-10">
        {/* Left Column - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#3779f1]/10 text-[#78bbfe] text-xs font-mono font-semibold tracking-widest border border-[#3779f1]/30 uppercase"
            >
              {t.registration.badge}
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              {t.registration.headlineStart}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#78bbfe] to-[#a5d0ff]">
                {t.registration.headlineHighlight}
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl border-l-2 border-white/10 pl-6">
              {t.registration.subheadline}
            </p>
          </div>

          <div className="relative space-y-8 pl-4">
            {/* Timeline Line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-[#3779f1]/50 via-[#3779f1]/20 to-transparent" />

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  className="relative flex items-start gap-6 group"
                >
                  <div className="relative z-10 bg-black border border-[#3779f1]/30 p-3 rounded-xl shadow-[0_0_15px_rgba(120,187,254,0.1)] group-hover:border-[#78bbfe] group-hover:shadow-[0_0_25px_rgba(120,187,254,0.3)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#78bbfe] group-hover:text-[#bfdbfe] transition-colors" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#bfdbfe] transition-colors">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm group-hover:text-gray-400 transition-colors">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative Elements behind form */}
          <div className="absolute -inset-1 bg-gradient-to-b from-[#3779f1]/20 to-transparent rounded-2xl blur-xl opacity-50" />
          
          <div className="relative bg-[#050505] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm overflow-hidden group/form">
            
            {/* Form Header / Status Bar */}
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-[10px] font-mono text-green-500 tracking-[0.2em] uppercase">Secure Connection</span>
              </div>
              <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">
                ID: LX-{Math.floor(Math.random() * 9000) + 1000}
              </div>
            </div>

            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#3779f1]/30 rounded-tl-xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#3779f1]/30 rounded-tr-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#3779f1]/30 rounded-bl-xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#3779f1]/30 rounded-br-xl pointer-events-none" />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    {t.registration.form.fullName}
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-[#78bbfe] transition-colors" />
                    <input 
                      {...register('fullName', { required: true })}
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#3779f1]/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-700"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    {t.registration.form.workEmail}
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-[#78bbfe] transition-colors" />
                    <input 
                      {...register('workEmail', { required: true })}
                      type="email"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#3779f1]/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-700"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    {t.registration.form.companyName}
                  </label>
                  <div className="relative group">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-[#78bbfe] transition-colors" />
                    <input 
                      {...register('companyName', { required: true })}
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#3779f1]/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-700"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    {t.registration.form.jobTitle}
                  </label>
                  <div className="relative group">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-[#78bbfe] transition-colors" />
                    <input 
                      {...register('jobTitle', { required: true })}
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#3779f1]/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-700"
                      placeholder="Chief Legal Officer"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                  {t.registration.form.phoneNumber}
                </label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-[#78bbfe] transition-colors" />
                  <input 
                    {...register('phoneNumber')}
                    type="tel"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-[#3779f1]/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-700"
                    placeholder="+62 812 3456 7890"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                    {t.registration.form.uploadTitle}
                  </label>
                  <span className="text-[10px] text-gray-600 font-mono">ENCRYPTED UPLOAD</span>
                </div>
                
                <div 
                  {...getRootProps()} 
                  className={`relative border border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group/drop ${
                    isDragActive ? 'border-[#3779f1] bg-[#3779f1]/5' : 'border-white/10 bg-black/20 hover:border-white/20 hover:bg-black/40'
                  }`}
                >
                  <input {...getInputProps()} />
                  
                  {/* Scanning Animation Line */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#3779f1]/5 to-transparent -translate-y-full group-hover/drop:translate-y-full transition-transform duration-1000 ease-in-out" />
                  </div>

                  {files.length > 0 ? (
                    <div className="flex items-center gap-3 text-green-400">
                      <CheckCircle className="w-8 h-8" />
                      <div className="text-center">
                        <p className="font-bold text-sm">{files[0].name}</p>
                        <p className="text-xs opacity-70">Ready for secure transmission</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="bg-[#3779f1]/10 p-3 rounded-full mb-3 group-hover/drop:scale-110 transition-transform duration-300">
                        <UploadCloud className="w-6 h-6 text-[#78bbfe]" />
                      </div>
                      <p className="text-gray-300 font-medium text-center text-sm">{t.registration.form.dropzoneText}</p>
                      <p className="text-gray-600 text-xs mt-1">{t.registration.form.dropzoneSubtext}</p>
                    </>
                  )}
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black hover:bg-gray-200 text-sm font-bold uppercase tracking-widest py-4 rounded-lg shadow-lg shadow-white/5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    {t.registration.form.submit} &rarr;
                  </>
                )}
              </button>
              
              <div className="text-[10px] text-gray-600 text-center mt-4 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3 h-3" />
                <span>{t.registration.form.agreement}</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}