import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // TODO: Implement actual login logic
    // After successful login, redirect to main app
    navigate('/home');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hpay-bg via-white to-hpay-sky/10 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-hpay-blue to-hpay-sky rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">H</span>
            </div>
            <span className="text-3xl font-bold text-hpay-blue">Pay</span>
          </Link>
          <h1 className="text-3xl font-bold text-hpay-black mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-lg">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-hpay-gray-blue/10 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-hpay-black font-medium text-sm">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-12 border-2 border-hpay-gray-blue/30 rounded-xl focus:border-hpay-blue focus:ring-2 focus:ring-hpay-blue/20 transition-all duration-200 bg-hpay-bg/30"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-hpay-black font-medium text-sm">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="h-12 border-2 border-hpay-gray-blue/30 rounded-xl focus:border-hpay-blue focus:ring-2 focus:ring-hpay-blue/20 transition-all duration-200 bg-hpay-bg/30 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-hpay-blue transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="rounded border-2 border-hpay-gray-blue/30 text-hpay-blue focus:ring-hpay-blue/20" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-hpay-blue hover:underline font-medium">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full h-12 btn-primary text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Sign In
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-hpay-blue hover:underline font-semibold">
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link to="/" className="text-hpay-blue hover:underline font-medium">
            0 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 