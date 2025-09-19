import React, { useState, useEffect } from "react";
import { Send, User, Mail, Phone, MessageCircle, Sparkles, Check, AlertCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitStatus: "",
    errors: {},
  }); 

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    { value: "wedding", label: "Wedding Events", emoji: "💒", color: "from-pink-500 to-rose-600" },
    { value: "corporate", label: "Corporate Events", emoji: "🏢", color: "from-blue-500 to-cyan-600" },
    { value: "birthday", label: "Birthday Parties", emoji: "🎂", color: "from-purple-500 to-violet-600" },
    { value: "anniversary", label: "Anniversaries", emoji: "💖", color: "from-red-500 to-pink-600" },
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^[\+]?[\d\s\-\(\)]{10,}$/.test(formData.phone))
      errors.phone = "Invalid phone number";
    if (!formData.service) errors.service = "Please select a service";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formState.errors[name]) {
      setFormState((prev) => ({
        ...prev,
        errors: { ...prev.errors, [name]: "" },
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState((prev) => ({ ...prev, errors }));
      return;
    }

    setFormState({ ...formState, isSubmitting: true, submitStatus: "" });

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, submitStatus: "success", errors: {} });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setFormState({ isSubmitting: false, submitStatus: "error", errors: {} });
    }
  };

  const InputField = ({ icon: Icon, label, name, type = "text", rows, options, ...props }) => {
    const hasError = !!formState.errors[name];
    const isFocused = focusedField === name;
    
    return (
      <div className={`relative group transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors duration-300 group-hover:text-white">
          {label}
        </label>
        <div className="relative">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className="relative">
            <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
              isFocused ? 'text-purple-400 scale-110' : hasError ? 'text-red-400' : 'text-gray-500'
            }`} />
            
            {type === "select" ? (
              <select
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField("")}
                className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
                  hasError 
                    ? 'border-red-500 shadow-lg shadow-red-500/25' 
                    : isFocused 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                      : 'border-gray-700 hover:border-gray-600'
                }`}
                {...props}
              >
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.emoji} {service.label}
                  </option>
                ))}
              </select>
            ) : type === "textarea" ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField("")}
                rows={rows}
                className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] resize-none ${
                  hasError 
                    ? 'border-red-500 shadow-lg shadow-red-500/25' 
                    : isFocused 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                      : 'border-gray-700 hover:border-gray-600'
                }`}
                {...props}
              />
            ) : (
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                onFocus={() => setFocusedField(name)}
                onBlur={() => setFocusedField("")}
                className={`w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:scale-[1.02] ${
                  hasError 
                    ? 'border-red-500 shadow-lg shadow-red-500/25' 
                    : isFocused 
                      ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                      : 'border-gray-700 hover:border-gray-600'
                }`}
                {...props}
              />
            )}
          </div>
        </div>
        {formState.errors[name] && (
          <div className="flex items-center mt-2 text-red-400 text-sm animate-in slide-in-from-left-2 duration-300">
            <AlertCircle className="w-4 h-4 mr-1" />
            {formState.errors[name]}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.3s ease, top 0.3s ease'
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 bg-pink-600/5 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-purple-300/30" />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Let's Create Magic
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Transform your special moments into unforgettable experiences with Star Universal Event
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className={`backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 shadow-2xl transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  icon={User}
                  label="Your Name"
                  name="name"
                  placeholder="Enter your full name"
                />

                <InputField
                  icon={Mail}
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />

                <InputField
                  icon={Phone}
                  label="Phone Number"
                  name="phone"
                  placeholder="Enter your phone number"
                />

                <InputField
                  icon={Sparkles}
                  label="Service Type"
                  name="service"
                  type="select"
                  options={services}
                />

                <InputField
                  icon={User}
                  label="Company (Optional)"
                  name="company"
                  placeholder="Enter company name"
                />

                <InputField
                  icon={MessageCircle}
                  label="Your Message"
                  name="message"
                  type="textarea"
                  rows={5}
                  placeholder="Tell us about your dream event..."
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className={`group relative w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:scale-105 ${
                    formState.isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg hover:shadow-purple-500/25'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center text-white">
                    {formState.isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Sending Magic...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </div>
                </button>

                {/* Status Messages */}
                {formState.submitStatus === "success" && (
                  <div className="flex items-center justify-center p-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl text-green-400 animate-in slide-in-from-bottom-2 duration-500">
                    <Check className="w-5 h-5 mr-2" />
                    Message sent successfully! We'll be in touch soon.
                  </div>
                )}

                {formState.submitStatus === "error" && (
                  <div className="flex items-center justify-center p-4 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl text-red-400 animate-in slide-in-from-bottom-2 duration-500">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Service Cards */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
              {services.map((service, index) => (
                <div
                  key={service.value}
                  className={`group backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setFormData(prev => ({ ...prev, service: service.value }))}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      {service.emoji}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {service.label}
                      </h4>
                      <p className="text-gray-400">Professional event planning and execution</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Contact Info */}
              <div className="mt-12 p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4">Get in Touch</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>hello@staruniversal.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;